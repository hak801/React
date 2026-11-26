import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`main-content ${theme}`}>
            <div className="card">
                <div className="message" key={theme}>
                    <span className="theme-icon">{theme == "light" ? "☀️" : "🌙"}</span>
                    <p>안녕하세요. 테마 변경이 가능한 웹사이트 입니다.</p>
                </div>
                <button className="theme-button" onClick={toggleTheme}>
                    {theme == "light" ? "다크 모드로 변경" : "라이트 모드로 변경"}
                </button>
            </div>
        </div>
    );
}

export default MainContent;