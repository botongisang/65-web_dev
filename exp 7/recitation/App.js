import Hello from "./Hello";
import Student from "./Student";
import Button from "./Button";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SPA from "./SPA";
import Message from "./Message";
import ProfileCard from "./ProfileCard";
import About from "./About";

function App() {
    return (
        <div>
            <Hello />
            <Student name="Aditya Soni" className="SE-AIML" />
            <Button text="Login" />
            <Button text="Register" />
            <Button text="Logout" />
            <Header />
            <Content />
            <Footer />
            <SPA />
            <Message text="Study React Daily" />
            <ProfileCard name="Aditya Soni" age="20" subject="Web Programming" />
            <About />
        </div>
    );
}
export default App;
