import React, { useState } from "react";
import "./Calculator.css";

const FREEZING_POINT = 0;
const BOILING_POINT = 100;
const VAPOR_POINT = 150;

function BoilingVerdict(props) {
    const celsius = props.celsius;

    let state = "liquid";
    let message = "물이 끓지 않는다.";

    if (celsius >= VAPOR_POINT) {
        state = "vapor";
        message = "물이 모두 기화되었다!";
    } else if (celsius >= BOILING_POINT) {
        state = "boiling";
        message = "물이 끓는다.";
    } else if (celsius <= FREEZING_POINT) {
        state = "frozen";
        message = "물이 얼어버렸다!";
    }

    return (
        <div className="verdict">
            <div className={`beaker ${state}`}>
                <div className="steam">
                    {[1, 2, 3, 4].map((i) => <span key={i} />)}
                </div>
                <div className="water">
                    <div className="bubbles">
                        {[1, 2, 3, 4, 5, 6].map((i) => <span key={i} />)}
                    </div>
                </div>
            </div>
            <p className={`message ${state}`}>{message}</p>
        </div>
    );
}

export default BoilingVerdict;
