import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {render} from "@testing-library/react";
export const CounterUseImperativeHandle = forwardRef((props ,ref)=> {
    const [count , setCount] = useState(0)
    const countRef = useRef()
    countRef.current = count
    console.log(count)
    console.log("CountRef",countRef.current)
    useImperativeHandle(ref , ()=>({
        increment: ()=>{
          setCount(countRef.current+1)
            console.log("Increment",count)
        },
        decrement: ()=>{
           setCount(countRef.current-1)
            console.log("decrement",count)
        },
        reset: ()=>{
            setCount(0)
            console.log("reset",count)
        },
        getCount: ()=>{
            // const count = setCount(countRef.current)
            console.log(countRef)
            return (
                <div>count:{count}</div>
            )
        }


    }),[count]);
    console.log(count)
    return(
        <div>count:{count}</div>
    )
})