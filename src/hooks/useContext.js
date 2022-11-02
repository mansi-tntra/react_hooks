import React, {useContext} from "react";
export const CounterContext = React.createContext();

const CounterUseContext = () =>{
    const count = useContext(CounterContext)
    console.log(count)
    return  <h1>{count}</h1>
}
export default CounterUseContext