import React, { useEffect, useState } from "react"
import { getDocs } from "firebase/firestore"
import { formatDateTime } from "../utils/utils"
import { operationsCollectionRef } from "../App"

type OperationsType = {
    id: string
    operation: string
    date: {
        seconds: string
    }
}

const OperationsInfo = () => {
    const [operations, setOperations] = useState<OperationsType[]>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(operationsCollectionRef)
            // @ts-ignore
            setOperations(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
        }
        getData()
    }, [])

    console.log(operations)

    return  (
        <div className="info">
            {operations.map(({ operation, date: { seconds } }) => (
                <div>{`${formatDateTime(seconds)} ${operation}`}</div>)
            )}
        </div>
    )
}

export default OperationsInfo