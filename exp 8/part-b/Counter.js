import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increase = () => setCount(prev => prev + step);
    const decrease = () => setCount(prev => prev - step);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Counter with Step</h2>
            <label>Step: </label>
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />
            <h3>Count: {count}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
