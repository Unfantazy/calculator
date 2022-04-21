import React from "react"
import { Dispatch } from "redux";

import { addDigit } from "../reducers/calculator-reducer"

type Props = {
    digit: string
    className?: string
    dispatch: Dispatch
}

const DigitButton = ({ dispatch, digit, className = '' }: Props) => {
    return (
        <button className={`${className} btn`} onClick={() => dispatch(addDigit(digit))}>
            {digit}
        </button>
    )
}

export default DigitButton