import React from "react";

export default class Inputs extends React.Component {
    render() {
        return(
            <div className="input-login">
                <input placeholder="Username"></input><br></br>
                <input placeholder="Password"></input>
            </div>
        );
    }
}