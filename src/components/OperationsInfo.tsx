import React, { useEffect, useState } from "react"
import { getDocs } from "firebase/firestore"
import { formatDateTime } from "../utils/utils"
import { operationsCollectionRef } from "../App"
import Loader from "./Loader";

type OperationsType = {
    id: string
    operation: string
    date: {
        seconds: string
    }
}

const OperationsInfo = () => {
    const [operations, setOperations] = useState<OperationsType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await getDocs(operationsCollectionRef)
            // @ts-ignore
            setOperations(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
            setLoading(false)
        }

        getData()
    }, [])

    if (loading) {
        return <Loader />
    }

    return  (
        <div className="info">
            {operations.map(({ operation, date: { seconds } }) => (
                <div>{`${formatDateTime(seconds)} ${operation}`}</div>)
            )}
        </div>
    )
}

export default OperationsInfo