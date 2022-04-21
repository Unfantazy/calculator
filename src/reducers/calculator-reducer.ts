import { evaluate } from "../utils/utils";

export const ACTIONS = {
    ADD_DIGIT: "ADD-DIGIT",
    CHOOSE_OPERATION: "CHOOSE-OPERATION",
    CLEAR: "CLEAR",
    EVALUATE: "EVALUATE",
    PERCENT: "PERCENT",
    REVERSE: 'REVERSE'
}

type CalculatorStateType = {
    currentOperand: string
    overwrite: boolean
    operation: string | null
    previousOperand: string | null
}

const initialState: any = {}

export const calculatorReducer = (state: CalculatorStateType = initialState, action: ActionsType) => {
    console.log(action)
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: action.digit,
                    overwrite: false,
                }
            }
            if (action.digit === "0" && state.currentOperand === "0") {
                return state
            }
            if (action.digit === "." && state.currentOperand.includes(".")) {
                return state
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${action.digit}`,
            }

        case ACTIONS.CHOOSE_OPERATION:
            if (!state.currentOperand && !state.previousOperand) {
                return state
            }

            if (!state.currentOperand) {
                return {
                    ...state,
                    operation: action.operation,
                }
            }

            if (!state.previousOperand) {
                return {
                    ...state,
                    operation: action.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: action.operation,
                currentOperand: null,
            }

        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.PERCENT:
            if (!state.currentOperand) {
                return state
            }

            return {
                ...state,
                currentOperand: String(+state.currentOperand / 100)
            }

        case ACTIONS.REVERSE:
            if (!state.currentOperand) {
                return state
            }

            return {
                ...state,
                currentOperand: String(+state.currentOperand * -1)
            }

        case ACTIONS.EVALUATE:
            if (!state.operation || !state.currentOperand || !state.previousOperand) {
                return state
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            }

        default:
            return state
    }
}


export const addDigit = (digit: string) => ({ type: ACTIONS.ADD_DIGIT, digit })
export const chooseOperation = (operation: string) => ({ type: ACTIONS.CHOOSE_OPERATION, operation })
export const evaluateData = () => ({ type: ACTIONS.EVALUATE })
export const clear = () => ({ type: ACTIONS.CLEAR })
export const percent = () => ({ type: ACTIONS.PERCENT })
export const reverse = () => ({ type: ACTIONS.REVERSE })


type ActionsType = any