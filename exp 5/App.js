// ==================== FUNCTIONAL COMPONENTS ====================

// 1. ProfileHeader - Functional Component with Props
function ProfileHeader({ name, title, imageUrl, bio }) {
    return (
        <div className="profile-header">
            <img src={imageUrl} alt={name} />
            <div className="info">
                <h2>{name}</h2>
                <p><strong>{title}</strong></p>
                <p>{bio}</p>
            </div>
        </div>
    );
}

// 2. SkillBadge - Functional Component with Props
function SkillBadge({ skill, level }) {
    return (
        <div className="skill-badge">
            <span>{skill}</span>
            <span className="level">{level}</span>
        </div>
    );
}

// 3. ProjectCard - Functional Component with Props
function ProjectCard({ title, description, techStack, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

// 4. SkillsList - Component using SkillBadge (Props Passing)
function SkillsList({ skills }) {
    return (
        <div className="skills-container">
            {skills.map((skillItem, index) => (
                <SkillBadge
                    key={index}
                    skill={skillItem.name}
                    level={skillItem.level}
                />
            ))}
        </div>
    );
}

// 5. ProjectList - Component using ProjectCard (Props Passing)
function ProjectList({ projects }) {
    return (
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    link={project.link}
                />
            ))}
        </div>
    );
}


// ==================== CLASS COMPONENT ====================

// ClassComponent with Lifecycle Methods
class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: ['Constructor called'],
            count: 0
        };
        console.log('Constructor called');
    }

    componentDidMount() {
        this.addLog('componentDidMount - Component mounted to DOM');
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.addLog(`componentDidUpdate - Count changed to ${this.state.count}`);
            console.log('componentDidUpdate');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount - Component will be removed');
    }

    addLog = (message) => {
        const timestamp = new Date().toLocaleTimeString();
        this.setState(prevState => ({
            logs: [...prevState.logs, `[${timestamp}] ${message}`]
        }));
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div className="class-component-demo">
                <h4>Class Component with Lifecycle Methods</h4>
                <p>Count: <strong>{this.state.count}</strong></p>
                <button onClick={this.incrementCount} style={{
                    padding: '10px 20px',
                    margin: '10px 0',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Increment Count
                </button>
                <div className="lifecycle-log">
                    <p><strong>Lifecycle Logs:</strong></p>
                    {this.state.logs.map((log, index) => (
                        <p key={index}>{log}</p>
                    ))}
                </div>
            </div>
        );
    }
}


// ==================== MAIN APP COMPONENT ====================

function App() {
    // Data to pass as props
    const profileData = {
        name: "John Doe",
        title: "Full Stack Developer",
        imageUrl: "https://via.placeholder.com/100",
        bio: "Passionate developer with expertise in React, Node.js, and modern web technologies."
    };

    const skillsData = [
        { name: "React", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "CSS", level: "Advanced" },
        { name: "MongoDB", level: "Beginner" }
    ];

    const projectsData = [
        {
            title: "E-Commerce Website",
            description: "A full-featured online store with cart, checkout, and payment integration.",
            techStack: ["React", "Node.js", "MongoDB"],
            link: "https://example.com"
        },
        {
            title: "Task Management App",
            description: "A productivity app to manage tasks with drag-and-drop functionality.",
            techStack: ["React", "Redux", "Firebase"],
            link: "https://example.com"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather information with beautiful visualizations.",
            techStack: ["JavaScript", "API", "CSS"],
            link: "https://example.com"
        }
    ];

    return (
        <div className="app-container">
            <h1>React Components & Props Demo</h1>

            {/* Profile Header - Passing Props */}
            <section className="section">
                <ProfileHeader
                    name={profileData.name}
                    title={profileData.title}
                    imageUrl={profileData.imageUrl}
                    bio={profileData.bio}
                />
            </section>

            {/* Skills Section - Functional Components with Props */}
            <section className="section">
                <h2>My Skills (Functional Components)</h2>
                <SkillsList skills={skillsData} />
            </section>

            {/* Projects Section - Props Passing Demo */}
            <section className="section">
                <h2>My Projects (Props Demo)</h2>
                <ProjectList projects={projectsData} />
            </section>

            {/* Class Component Demo */}
            <section className="section">
                <h2>Class Component Demo</h2>
                <LifecycleDemo />
            </section>
        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
