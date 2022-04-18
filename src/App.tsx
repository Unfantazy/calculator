import React, { useState } from 'react';
import { OPERATORS } from "./CONSTANTS";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import './App.css';

function App() {
    const [currentValue, setCurrentValue] = useState('')

    const equalsTo = () => {
        try {
            setCurrentValue(eval(currentValue.replace('x', '*')))
        }
        catch {
            setCurrentValue('Ошибка')
            setTimeout(() => {
                setCurrentValue('0')
            }, 1000)
        }
    }
    const resetValue = () => {
        setCurrentValue('')
    }
    const reverseValue = () => {
        setCurrentValue(prev => (+prev * -1).toString())
    }
    const getPercent = () => {
        setCurrentValue(prev => (+prev / 100).toString())
    }

    const setValue = (val: string) => {
        if (currentValue === '0') {
            setCurrentValue('')
        }

        switch (val) {
            case OPERATORS.EQUALS: {
                equalsTo()
                break
            }
            case OPERATORS.RESET: {
                resetValue()
                break
            }
            case OPERATORS.REVERSE: {
                reverseValue()
                break
            }
            case OPERATORS.PERCENT: {
                getPercent()
                break
            }
            default: {
                setCurrentValue(prev => prev + val)
            }
        }
    }

  return (
      <div className="container">
          <div className="calculator">
              <Display currentValue={currentValue} />
              <Buttons setValue={setValue}/>
          </div>
      </div>
  )
}

export default App;
