import React, { Component } from "react";
class About extends Component {
    render() {
        return (
            <div>
                <h3>About Me</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default About;
