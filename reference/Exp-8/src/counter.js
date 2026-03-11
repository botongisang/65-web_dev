import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    setStep(isNaN(value) ? 0 : value);
  };

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter App</h2>

      <input
        type="number"
        value={step}
        onChange={handleStepChange}
        placeholder="Enter step value"
      />

      <h3>Count: {count}</h3>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;