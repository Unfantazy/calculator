import React from "react"
import { addDigit } from "../reducers/calculator-reducer"

const DigitButton = ({ dispatch, digit, className = '' }: any) => {
    return (
        <button className={`${className} btn`} onClick={() => dispatch(addDigit(digit))}>
            {digit}
        </button>
    )
}

export default DigitButton