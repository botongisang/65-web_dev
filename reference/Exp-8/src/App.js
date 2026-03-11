import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    if (email === "") {
      setMessage("Email cannot be empty");
    } else if (!email.includes("@")) {
      setMessage("Invalid email format");
    } else {
      setMessage("Email is valid ✅");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={validateEmail}>Validate</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;