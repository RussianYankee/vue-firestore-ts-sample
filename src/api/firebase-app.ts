// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getFirestore,
    addDoc,
    getDocs,
    collection,
    doc,
    deleteDoc,
    setDoc,
    serverTimestamp,
    DocumentData
} from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlwawhaQcMq679gWfzDZTB4A1TasmoJxc",
    authDomain: "sample-web-app-547a0.firebaseapp.com",
    projectId: "sample-web-app-547a0",
    storageBucket: "sample-web-app-547a0.appspot.com",
    messagingSenderId: "287969019433",
    appId: "1:287969019433:web:11fe0c2c0f6ab38cc03e38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestoreDB = getFirestore(app)


function addNewDoc<T extends DocumentData>(collectionName: string, data: T) {
    try {
        addDoc(collection(firestoreDB, collectionName), data)
            .then(docRef => console.log("New doc got ID: ", docRef.id))
    } catch (e) {
        console.error("Can't add document: ", e)
    }

}

function getDocsFromCollection(collectionName: string) {
    getDocs(collection(firestoreDB, collectionName))
        .then(snapshot => snapshot
            .forEach(doc => console.log(`${doc.id} => ${doc.data()}`)))
}

function getRef(collectionName: string, id: string) {
    return doc(firestoreDB, collectionName, id)
}

function deleteDocument(collectionName: string, id: string) {
    deleteDoc(getRef(collectionName, id)).then((v) => console.log("DELETED", v))
}

function createOrUpdate(collectionName: string, id: string, data: unknown) {
    setDoc(getRef(collectionName, id), data)
}

function updateTimestamp(collectionName: string, id: string) {
    setDoc(getRef(collectionName, id), { changed: serverTimestamp() })
}

export {addNewDoc, getDocsFromCollection, getRef, deleteDocument, createOrUpdate, updateTimestamp}
