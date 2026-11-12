import React, { useState } from "react";
import "./Calculator.css";

// 온도 기준
const FREEZING_POINT = 0;    // 0℃ 이하 → 얼음
const BOILING_POINT = 100;   // 100℃ 이상 → 끓음
const VAPOR_POINT = 150;     // 150℃ 이상 → 모두 기화

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
                {/* 수증기 */}
                <div className="steam">
                    {[1, 2, 3, 4].map((i) => <span key={i} />)}
                </div>
                {/* 물 */}
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

function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input
                value={temperature}
                onChange={handleChange} />
            <BoilingVerdict
                celsius={parseFloat(temperature)} />
        </fieldset>
    )
}

export default Calculator;
