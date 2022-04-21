import React from "react";
import { chooseOperation } from "../reducers/calculator-reducer";

type Props = {
    operation: string
    dispatch: any
}

const OperationButton = ({ dispatch, operation }: Props) => {
    return (
        <button className="btn orange" onClick={() =>dispatch(chooseOperation(operation))}>
            {operation}
        </button>
    )
}

export default OperationButton