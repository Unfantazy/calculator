import {combineReducers, createStore} from 'redux'
import { calculatorReducer } from "../reducers/calculator-reducer"

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => console.log(store.getState()))