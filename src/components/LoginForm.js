import React from "react";
import Inputs from "./inputs";


export default class LoginForm extends React.Component {
    render(){
        return (
            <form className="login-form">
                <Inputs/>
                <h3>Log In</h3>
            </form>
        );
    }
}