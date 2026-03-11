import React, { useState } from "react";

function Ex2_Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Exercise 2: Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    );
}

export default Ex2_Counter;
