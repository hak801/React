import LoginButton from "../ex02/LoginButton";

import React, {useState} from "react";
import "./LogInControl.css";
import LogOutButton from "./LogOutButton";
import Greeting from "../ex01/Greeting";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    }

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    button = isLoggedIn ? <LogOutButton onClick={handleLogOutClick}/> : <LoginButton onClick={handleLogInClick}/>

    return(
        <div className={"login-control"}>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );

}

export default LogInControl;