import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
    const [now, setNow] = useState(new Date());
    const [theme, setTheme] = useState(() => {
        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const pad = (num) => String(num).padStart(2, "0");
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="clock-page" data-theme={theme}>
            <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="테마 전환"
            >
                {theme === "dark" ? "라이트 모드로" : "다크 모드로"}
            </button>

            <div className="clock-container">
                <h1 className="clock-department">인공지능소프트웨어학과</h1>

                <div
                    className="neon-clock"
                    aria-label={`현재 시각 ${now.toLocaleTimeString()}`}
                >
                    <span className="neon-digit">{hours}</span>
                    <span className="neon-colon">:</span>
                    <span className="neon-digit">{minutes}</span>
                    <span className="neon-colon">:</span>
                    <span className="neon-digit">{seconds}</span>
                </div>

                <h2 className="clock-caption">
                    현재 시각은 {now.toLocaleTimeString()}입니다.
                </h2>
            </div>
        </div>
    );
}

export default Clock;
