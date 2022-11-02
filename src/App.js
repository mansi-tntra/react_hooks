import logo from './logo.svg';
import './App.css';
import Counter from "./hooks/useState";
import CounterUseEffect from "./hooks/useEffect";
import React, { useState,useRef} from "react";
import {CounterContext} from "./hooks/useContext";
import CounterUseContext from "./hooks/useContext";
import {CounterUseReducer} from "./hooks/useReducer";
import {CounterCallBack} from "./hooks/useCallBack";
import {CounterUseLayoutEffect} from "./hooks/useLayoutEffect";
import {CounterUseDebugValue} from "./hooks/useDebugValue";
import {CounterUseImperativeHandle} from "./hooks/useImperativeHandle";

// const CounterContext = React.createContext();
// // const CounterContext = React.createContext();
//
// const CounterUseContext = () =>{
//     const count = useContext(CounterContext)
//     console.log(count)
//     return  <h1>{count}</h1>
// }
// export default CounterUseContext
function App() {
    const [count , setCount]= useState(0)
    const counterRef = useRef();
  return (
    <div className="App">
        <div>
            {/*<CounterCallBack/>*/}
            <CounterUseImperativeHandle  ref={counterRef}/>
            <button onClick={()=>counterRef.current.increment()}>Increment</button>
            <button onClick={()=>counterRef.current.decrement()}>Decrement</button>
            <button onClick={()=>counterRef.current.reset()}>Reset</button>
            <button onClick={()=>counterRef.current.getCount()}>Get count</button>
        </div>
    </div>
  );
}

export default App;
