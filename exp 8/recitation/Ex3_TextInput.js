import React, { useState } from "react";

function Ex3_TextInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Exercise 3: Text Input</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>You entered: {text}</p>
        </div>
    );
}

export default Ex3_TextInput;
