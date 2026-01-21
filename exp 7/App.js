const { useState, useEffect } = React;

// ==================== USER CARDS COMPONENT ====================
// Fetches users from JSONPlaceholder API

function UserCards() {
    // State management with useState
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect for fetching data on component mount
    useEffect(() => {
        fetchUsers();
    }, []); // Empty dependency array = runs once on mount

    // Fetch users function
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Loading state
    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <p>Loading users...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="error">
                <p>Error: {error}</p>
                <button className="retry-btn" onClick={fetchUsers}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Search Box */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Stats Bar */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="number">{users.length}</div>
                    <div className="label">Total Users</div>
                </div>
                <div className="stat-item">
                    <div className="number">{filteredUsers.length}</div>
                    <div className="label">Showing</div>
                </div>
            </div>

            {/* User Cards Grid */}
            <div className="cards-grid">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <img
                            src={`https://i.pravatar.cc/100?u=${user.email}`}
                            alt={user.name}
                        />
                        <h3>{user.name}</h3>
                        <p className="email">{user.email}</p>
                        <span className="company">{user.company.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}


// ==================== POSTS LIST COMPONENT ====================
// Fetches posts with pagination

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // useEffect to fetch posts
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // useEffect to log page changes (demo of dependency array)
    useEffect(() => {
        console.log(`Page changed to: ${currentPage}`);
    }, [currentPage]); // Runs when currentPage changes

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div>
            {/* Stats */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="number">{posts.length}</div>
                    <div className="label">Total Posts</div>
                </div>
                <div className="stat-item">
                    <div className="number">{currentPage}/{totalPages}</div>
                    <div className="label">Current Page</div>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="cards-grid">
                {currentPosts.map(post => (
                    <div key={post.id} className="post-card">
                        <span className="post-id">Post #{post.id}</span>
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button
                    className="page-btn"
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                        <button
                            key={pageNum}
                            className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                            onClick={() => setCurrentPage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    className="page-btn"
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}


// ==================== MAIN APP COMPONENT ====================

function App() {
    const [activeTab, setActiveTab] = useState('users');

    return (
        <div className="app-container">
            <h1>React useEffect - API Fetching</h1>

            {/* Tab Buttons */}
            <div className="section">
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        👤 Users API
                    </button>
                    <button
                        className={`filter-btn ${activeTab === 'posts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('posts')}
                    >
                        📝 Posts API
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <section className="section">
                <h2>
                    {activeTab === 'users' ? 'Users from JSONPlaceholder API' : 'Posts from JSONPlaceholder API'}
                </h2>

                {activeTab === 'users' ? <UserCards /> : <PostsList />}
            </section>
        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
