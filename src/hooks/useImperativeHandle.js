import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {render} from "@testing-library/react";
export const CounterUseImperativeHandle = forwardRef((props ,ref)=> {
    const [count , setCount] = useState(0)
    console.log(count)
    useImperativeHandle(ref , ()=>({
        increment: ()=>{
          setCount(count+1)
            console.log("Increment",count)
        },
        decrement: ()=>{
           setCount(count-1)
            console.log("decrement",count)
        },
        reset: ()=>{
            setCount(0)
            console.log("reset",count)
        },
        getCount:()=>{
            console.log("get count",count)
            return (
                <div>
                    count: {count}
                </div>
            )
        }

    }),[count]);
    console.log(count)
    return(
        <div>count:{count}</div>
    )
})