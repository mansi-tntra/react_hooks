import React, {useLayoutEffect, useRef, useState} from "react";
export const CounterUseLayoutEffect =()=>{
    const [count , setCount] = useState(0)
    const CountRef = useRef()
    CountRef.current = count
    // console.log(CountRef.current)
    useLayoutEffect(()=>{
        const interval = setInterval(()=>{
            setCount(CountRef.current +1)
            console.log(CountRef)
        },1000);
        return  ()=> clearInterval(interval)
    },[]);
    return <div> Count: {count}</div>
}