
import { getFirestore, collection, doc, getDoc } from "firebase/firestore"
import { createFirebaseApp } from "../firebase/clientApp"

createFirebaseApp()
export const getHomeData = async () => {
    const db = getFirestore()
    const homeCollection = collection(db, 'home')
    const homeDoc = (await getDoc(doc(homeCollection, 'detail')))
    
    if (!homeDoc.exists) {
        return null
    }

    return homeDoc.data()
}