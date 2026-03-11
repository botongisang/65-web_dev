import React, { useState } from "react";

function Ex1_MessageToggle() {
    const [message, setMessage] = useState("Hello Student");

    const toggleMessage = () => {
        setMessage(message === "Hello Student" ? "Welcome to React State" : "Hello Student");
    };

    return (
        <div>
            <h2>Exercise 1: Message Toggle</h2>
            <p>{message}</p>
            <button onClick={toggleMessage}>Change Message</button>
        </div>
    );
}

export default Ex1_MessageToggle;
