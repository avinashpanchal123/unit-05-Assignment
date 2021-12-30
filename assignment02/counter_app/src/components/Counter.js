import React, { useState } from "react";

const Counter = (props)=>{
    const [count, setCount] = useState(props.count)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const double = ()=>{
        setCount(count*2)
    }
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={double}>Double</button>

        </div>
    )
}

export default Counter;