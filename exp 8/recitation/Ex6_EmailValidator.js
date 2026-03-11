import React, { useState } from "react";

function Ex6_EmailValidator() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = () => {
        if (email === "") {
            setMessage("Email cannot be empty");
        } else if (!email.includes("@")) {
            setMessage("Email must contain @ symbol");
        } else {
            setMessage("Valid email!");
        }
    };

    return (
        <div>
            <h2>Exercise 6: Email Validator</h2>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <button onClick={validateEmail}>Validate</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Ex6_EmailValidator;
