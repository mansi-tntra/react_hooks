import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const CounterCallBack = ()=>{
   const [count , setCount] = useState(0);
   const increment = useCallback(()=>{
       setCount(count+1);
   },[count])
    const double = useMemo(()=>{
        return count*2
    },[count])
    const CountRef = useRef(0);
    // CountRef.current = count
    useEffect(()=>{
        CountRef.current = count
    },[count])
    return(
        <>
            Count :{count}
            <button onClick={increment}>Increment</button>
            <div>Double:{double}</div>
            <div>Previous Count: {CountRef.current}</div>
        </>
    )
}