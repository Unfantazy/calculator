import React from 'react'
import { collection } from "firebase/firestore"

import { db } from "./firebase/firebase-config"
import './App.css'
import Calculator from "./components/Calculator"
import OperationsInfo from "./components/OperationsInfo"

export const operationsCollectionRef = collection(db, 'operations')

const App = () => {
    return <div className="container">
        <Calculator/>
        <OperationsInfo/>
    </div>
}

export default App
