import React from "react"
import { Dispatch } from "redux";

import { chooseOperation } from "../reducers/calculator-reducer"

type Props = {
    operation: string
    dispatch: Dispatch
}

const OperationButton = ({ dispatch, operation }: Props) => {
    return (
        <button className="btn orange" onClick={() =>dispatch(chooseOperation(operation))}>
            {operation}
        </button>
    )
}

export default OperationButton