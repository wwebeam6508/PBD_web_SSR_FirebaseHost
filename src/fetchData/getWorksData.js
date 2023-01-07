
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { createFirebaseApp } from "../firebase/clientApp"
import moment from "moment-timezone"
createFirebaseApp()
export const getWorksData = async (year) => {
    const db = getFirestore()
    const workCollection = collection(db, 'works')
    const workQuery = query(workCollection, where("date", ">", new Date(`${year-1}-12-31`)), where("date", "<", new Date(`${year+1}-01-01`)))
    const workDoc = await getDocs(workQuery)
    let works = []
    workDoc.forEach((doc) => {
        const resdata = doc.data()
        const momentdate = moment(new Date(resdata.date.seconds * 1000)).add(543,'y').tz("Asia/Bangkok").format("DD-MM-YYYY")
        works.push({
            ID:doc.id,
            title:resdata.title,
            date:momentdate,
            isClickable: resdata.detail || resdata.images ? true : false
        })
    })
    return {
        works:works,
        pagination: await pagination(year)
    }
}

export const getWorkYearsData = async () => {
    const db = getFirestore()
    const workCollection = collection(db, 'works')
    const workDoc = await getDocs(workCollection)
    let years = []
    workDoc.forEach((doc) => {
        years.push(new Date(doc.data().date.seconds * 1000).getFullYear())
    })

    years = years.map(item => item)
    .filter((value, index, self) => self.indexOf(value) === index)
    


    return years
}

async function pagination(selectedPage) {
    const pages = await getWorkYearsData()
    
    let filPage = []
    pages.forEach((page,index) => {
        if(selectedPage === page){
            if(index === 0){
                filPage.push(page)
                if(pages[index+1])filPage.push(pages[index+1])
            }else if(index === pages.length - 1){
                if(pages[index-1])filPage.push(pages[index-1])
                filPage.push(page)
            }else{
                if(pages[index-1])filPage.push(pages[index-1])
                filPage.push(page)
                if(pages[index+1])filPage.push(pages[index+1])
            }
        }
    })
    return filPage
}