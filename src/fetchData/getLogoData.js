
import { getFirestore, collection, doc, getDoc } from "firebase/firestore"
import { createFirebaseApp } from "../firebase/clientApp"

createFirebaseApp()
export const getLogoData = async () => {
    const db = getFirestore()
    const homeCollection = collection(db, 'logo')
    const homeDoc = (await getDoc(doc(homeCollection, 'CmbYpEL2YUvPJNlWnSmD')))

    if (!homeDoc.exists) {
        return null
    }

    return homeDoc.data()
}