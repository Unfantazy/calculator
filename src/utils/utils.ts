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

export const formatDateTime = (input: string) => {
    let epoch = new Date(0)
    epoch.setSeconds(parseInt(input))
    let date = epoch.toISOString()
    date = date.replace('T', ' ')
    return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString().split(' ')[0]
}