import { useState } from "react";

export const useCount = (valInicial = 0, min, max) => {

    if(valInicial < min || valInicial > max){
        valInicial = min
    }

    const [count, setCount] = useState(valInicial)

    const sum = () => count < max && setCount(count + 1)
    const minus = () => count > min && setCount(count - 1)
    
    const reset = () => setCount(valInicial)

    return {count, sum, minus, reset}
}