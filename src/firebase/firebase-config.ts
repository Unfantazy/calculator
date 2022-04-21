import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbYSxFjrIjf3NaWfYHNqtpt9eHkC-SQ8A",
    authDomain: "calculator-a3d3b.firebaseapp.com",
    projectId: "calculator-a3d3b",
    storageBucket: "calculator-a3d3b.appspot.com",
    messagingSenderId: "973320036104",
    appId: "1:973320036104:web:61067f64b7870b336bd6bd"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)