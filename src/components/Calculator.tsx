import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addDoc } from "firebase/firestore"
import { AppRootStateType } from "../app/store"
import { clear, evaluateData, percent, reverse } from "../reducers/calculator-reducer"
import OperationButton from "./OperationButton"
import DigitButton from "./DigitButton"
import {operationsCollectionRef} from "../App"
import {evaluate} from "../utils/utils"

const Calculator = () => {
    const dispatch = useDispatch()
    const { currentOperand = '0', previousOperand = null, operation } = useSelector((state: AppRootStateType) => state.calculator)

    const createLineInDB = async () => {
        const total = evaluate({ currentOperand, previousOperand, operation })

        await addDoc(operationsCollectionRef, {
            operation: `${previousOperand} ${operation} ${currentOperand} = ${total}`,
            date: new Date()
        })
    }

    return <div className="calculator">
        <input type="text" className="calculator__text" value={currentOperand} />
        <div className="calculator__buttons">
            <button onClick={() => dispatch(clear())} className="btn">
                AC
            </button>
            <button onClick={() => dispatch(reverse())} className="btn">
                +/-
            </button>
            <button onClick={() => dispatch(percent())} className="btn">
                %
            </button>
            <OperationButton operation="÷" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="*" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} className="span-2"/>
            <DigitButton digit="." dispatch={dispatch} />
            <button onClick={() => {
                createLineInDB()
                dispatch(evaluateData())
            }} className="orange btn">
                =
            </button>
        </div>
    </div>
}

export default Calculator