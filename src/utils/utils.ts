export const evaluate = ({ currentOperand, previousOperand, operation }: any) => {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation: number | string = ""
    switch (operation) {
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "÷":
            computation = prev / current
            break
    }

    return computation.toString()
}