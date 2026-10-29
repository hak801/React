import React from "react";

function Toolbar({isLoggedIn, loginClick, logoutClick}) {
    return (
        <div className="toolbar">
            {isLoggedIn ? <p className="welcome-message">환영합니다!</p> : <p className="welcome-message guest">로그인이 필요합니다.</p>}

            {isLoggedIn ? <button className="auth-button logout" onClick={logoutClick}>로그아웃</button> : <button className="auth-button" onClick={loginClick}>로그인</button>}
        </div>
    );
}

export default Toolbar;