import React, { useState } from "react";

function Ex4_NameCity() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    return (
        <div>
            <h2>Exercise 4: Name and City</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <p>Name: {name}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default Ex4_NameCity;
