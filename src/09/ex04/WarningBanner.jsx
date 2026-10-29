import React from "react";
import "./WarningBanner.css";

function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div className="warning-banner">
            <div className="warning-stripe"></div>
            <div className="warning-content">
                <div className="warning-icon">!</div>
                <div>
                    <h1 className="warning-title">경고</h1>
                    <p className="warning-message">치명적인 위협이 감지되었습니다. 즉시 확인하세요.</p>
                </div>
                <div className="warning-icon">!</div>
            </div>
            <div className="warning-stripe"></div>
        </div>
    );
}

export default WarningBanner;
