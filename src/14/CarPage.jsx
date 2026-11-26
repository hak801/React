import React, { useState, useCallback, useContext } from "react";
import ThemeContext from "./ThemeContext";
import CarImage from "./CarImage";
import "./MainContent.css";
import "./CarPage.css";

// 테마 값을 받아 화면을 그리는 부분
function CarContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`main-content ${theme}`}>
            <div className="card car-card">
                <div className="message" key={theme}>
                    <div className="car-image">
                        <CarImage theme={theme} />
                    </div>
                    <h2 className="car-title">
                        {theme === "light" ? "☀️ 낮의 드라이브" : "🌙 밤의 드라이브"}
                    </h2>
                    <p>
                        {theme === "light"
                            ? "맑은 하늘 아래를 달리는 빨간 자동차입니다."
                            : "전조등을 켜고 밤길을 달리는 자동차입니다."}
                    </p>
                </div>
                <button className="theme-button" onClick={toggleTheme}>
                    {theme === "light" ? "다크 모드로 변경" : "라이트 모드로 변경"}
                </button>
            </div>
        </div>
    );
}

// 테마 상태를 만들고 Context로 내려주는 부분
function CarPage() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <CarContent />
        </ThemeContext.Provider>
    );
}

export default CarPage;
