import React, { useState, useEffect } from "react";

// PreLab 1: useEffect on mount
function PreLab1() {
    useEffect(() => {
        console.log("Component Mounted - useEffect is working!");
    }, []);

    return (
        <div>
            <h2>PreLab 1: useEffect on Mount</h2>
            <p>Hello, useEffect is Working!</p>
        </div>
    );
}

// PreLab 2: Counter with useEffect dependency
function PreLab2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed to:", count);
    }, [count]);

    return (
        <div>
            <h2>PreLab 2: Counter with useEffect</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    );
}

// PreLab 3: Simulated API call with setTimeout
function PreLab3() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData("Simulated API Response: Hello from the server!");
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h2>PreLab 3: Simulated API Call</h2>
            {loading ? <p>Loading...</p> : <p>{data}</p>}
        </div>
    );
}

// PreLab 4: Fetch API on button click
function PreLab4() {
    const [post, setPost] = useState(null);

    const fetchPost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch(err => console.error("Fetch error:", err));
    };

    return (
        <div>
            <h2>PreLab 4: Fetch on Button Click</h2>
            <button onClick={fetchPost}>Fetch Post</button>
            {post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
}

// PreLab 5: Async/Await fetch
function PreLab5() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
                const data = await response.json();
                setPost(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>PreLab 5: Async/Await Fetch</h2>
            {post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

// PreLab 6: Render list of users
function PreLab6() {
    const users = [
        { id: 1, name: "Aditya", email: "aditya@email.com" },
        { id: 2, name: "Rahul", email: "rahul@email.com" },
        { id: 3, name: "Sneha", email: "sneha@email.com" }
    ];

    return (
        <div>
            <h2>PreLab 6: Render User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Main App
function App() {
    return (
        <div>
            <h1>Experiment 9 - Recitation</h1>
            <PreLab1 />
            <hr />
            <PreLab2 />
            <hr />
            <PreLab3 />
            <hr />
            <PreLab4 />
            <hr />
            <PreLab5 />
            <hr />
            <PreLab6 />
        </div>
    );
}

export default App;
