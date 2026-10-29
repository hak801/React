import React, {useState} from "react";
import Toolbar from "./Toolbar";
import girlImg from "./girl.jpg";
import "./LandingPage.css";

function LandingPage() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    }

    const logoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <img className="login-image" src={girlImg} alt="프로필 사진"/>
                <p className="login-title">9장 조건부 렌더링 실습 화면입니다.</p>
                <Toolbar isLoggedIn={isLoggedIn} loginClick={loginClick} logoutClick={logoutClick}/>
            </div>
        </div>
    );
}

export default LandingPage;