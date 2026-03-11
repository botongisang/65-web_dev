import React, { useState } from "react";

function Ex5_StateObject() {
    const [formData, setFormData] = useState({ name: "", city: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Exercise 5: State Object</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
            />
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
            />
            <p>Name: {formData.name}</p>
            <p>City: {formData.city}</p>
        </div>
    );
}

export default Ex5_StateObject;
