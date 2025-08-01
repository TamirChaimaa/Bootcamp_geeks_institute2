import React, { useState } from "react";

const Counter : React.FC = () => {
    const [count , setCount] = useState<number>(0);

    const [lastAction , setLastAction] = useState<string | null>(null);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        setLastAction('Incremented')
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1);
        setLastAction('Decremented');
    }

    return (
        <div>
            <h2>Counter : {count}</h2>
            <p>Last Action: {lastAction ?? 'None yet'}</p>
            <button onClick={handleIncrement}>➕ Increment</button>
            <button onClick={handleDecrement}>➖ Decrement</button>
        </div>
    )
}

export default Counter;
