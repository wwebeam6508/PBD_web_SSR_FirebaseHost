
import { getFirestore, collection, doc, getDoc } from "firebase/firestore"
import { createFirebaseApp } from "../firebase/clientApp"

createFirebaseApp()
export const getAboutData = async () => {
    const db = getFirestore()
    const aboutCollection = collection(db, 'about')
    const aboutDoc = (await getDoc(doc(aboutCollection, 'sNGWxXlFuwv0Cl7ODoZc')))

    if (!aboutDoc.exists) {
        return null
    }

    return aboutDoc.data()
}