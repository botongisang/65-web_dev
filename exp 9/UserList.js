import React, { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

    return (
        <div>
            <h1>User List</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "250px"
                        }}
                    >
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Company: {user.company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
