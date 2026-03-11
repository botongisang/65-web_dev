import React, { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.username) {
            newErrors.username = "Username is required";
        }
        if (!formData.email.includes("@")) {
            newErrors.email = "Email must contain @";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSuccess("Login Successful!");
        } else {
            setSuccess("");
        }
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            {success && (
                <div style={{ color: "green" }}>
                    <h3>{success}</h3>
                    <p>Username: {formData.username}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                </div>
            )}
        </div>
    );
}

export default LoginForm;
