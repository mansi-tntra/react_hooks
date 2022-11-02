import React, {useEffect, useState} from "react";
const CounterUseEffect =()=>{
    const [count , setCount] = useState(0)
    const [name , setName]=useState('please Enter Something')
    useEffect(()=>{
        console.log("updating document Title")
        document.title = `you clicked ${count} times`
        // setName("Something")
    },[count])
    return(
        <>
            <div>Count:{count}</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <div>Name:{name}</div>
            <input type='text'  onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}

export default CounterUseEffect;