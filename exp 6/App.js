const { useState } = React;

// ==================== COUNTER APP WITH useState ====================

function CounterApp() {
    // useState hooks
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // Increment handler
    const increment = () => {
        setCount(prevCount => prevCount + step);
    };

    // Decrement handler
    const decrement = () => {
        setCount(prevCount => prevCount - step);
    };

    // Reset handler
    const reset = () => {
        setCount(0);
    };

    // Step change handler
    const handleStepChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        setStep(value);
    };

    return (
        <div className="counter-container">
            <h3>Click the buttons to change the count!</h3>

            <div className="counter-display">{count}</div>

            <div className="counter-buttons">
                <button className="counter-btn decrement" onClick={decrement}>
                    - Decrease
                </button>
                <button className="counter-btn reset" onClick={reset}>
                    Reset
                </button>
                <button className="counter-btn increment" onClick={increment}>
                    + Increase
                </button>
            </div>

            <div className="step-control">
                <label>Step Value:</label>
                <input
                    type="number"
                    value={step}
                    onChange={handleStepChange}
                    min="1"
                />
            </div>
        </div>
    );
}


// ==================== LOGIN FORM WITH CONTROLLED COMPONENTS ====================

function LoginForm() {
    // useState for form fields (Controlled Components)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    // useState for form state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    // Handle input changes (Controlled Component pattern)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Validate form
    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSubmittedData(formData);
            setIsLoggedIn(true);
            console.log('Login successful:', formData);
        }
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setFormData({ email: '', password: '', rememberMe: false });
        setSubmittedData(null);
    };

    // If logged in, show welcome message
    if (isLoggedIn) {
        return (
            <div className="welcome-message">
                <h3>Welcome, {submittedData.email}!</h3>
                <p>You have successfully logged in.</p>
                <p>Remember Me: {submittedData.rememberMe ? 'Yes' : 'No'}</p>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                {/* Email Field - Controlled Component */}
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error-msg">{errors.email}</p>}
                </div>

                {/* Password Field - Controlled Component */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error-msg">{errors.password}</p>}
                </div>

                {/* Checkbox - Controlled Component */}
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!formData.email || !formData.password}
                >
                    Login
                </button>
            </form>

            {/* Live Preview - Shows state in real-time */}
            <div className="live-preview">
                <h3>Live State Preview</h3>
                <p><strong>Email:</strong> {formData.email || '(empty)'}</p>
                <p><strong>Password:</strong> {'*'.repeat(formData.password.length) || '(empty)'}</p>
                <p><strong>Remember Me:</strong> {formData.rememberMe ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
}


// ==================== MAIN APP COMPONENT ====================

function App() {
    return (
        <div className="app-container">
            <h1>React useState - State Management</h1>

            {/* Counter App Section */}
            <section className="section">
                <h2>Counter App with useState</h2>
                <CounterApp />
            </section>

            {/* Login Form Section */}
            <section className="section">
                <h2>Login Form with Controlled Components</h2>
                <LoginForm />
            </section>
        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
