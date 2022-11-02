import React, {useDebugValue, useState} from "react";
const useCounter = (initialSate)=>{
    const [count , setCount] =useState(initialSate)
    useDebugValue(count>0 ? 'Positive':'Zero');
    const increment = ()=>{
        setCount(count+1)
    }
    const Decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(initialSate)
    }
    return [count,increment , Decrement , reset]
}

export const CounterUseDebugValue =()=>{
    const [count,increment , Decrement , reset] = useCounter(0);
    return(
        <>
           <div>
               count: {count}
               <button onClick={increment}>Increment</button>
               <button onClick={Decrement}>Decrement</button>
               <button onClick={reset}>Reset</button>
           </div>
        </>
    )
}