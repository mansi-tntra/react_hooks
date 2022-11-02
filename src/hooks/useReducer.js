import React, {useReducer} from "react";
const initialState = {
    count: 0
}
const reducer = (state , action)=>{
    switch (action.type) {
        case 'increment':
            return{
                count: state.count+1
            }
        case 'decrement':
            return {
                count : state.count-1
            }
        case 'reset':
            return initialState

        default:
            return state
    }
}

export const CounterUseReducer = ()=>{
    const [state , dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            Count :{state.count}
            <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
        </div>
)
}