import React from 'react'
import './App.css'
import Calculator from "./components/Calculator"
import OperationsInfo from "./components/OperationsInfo"
import { collection } from "firebase/firestore"
import { db } from "./firebase/firebase-config"

export const operationsCollectionRef = collection(db, 'operations')

const App = () => {
    return <div className="container">
        <Calculator/>
        <OperationsInfo/>
    </div>
}

export default App
