import React from 'react';
import FancyBorder from "./FancyBorder";
function WelcomeDialog(props) {
    return (
        <FancyBorder>
            <h1>
                어서오세요.
            </h1>
            <p>
                우리 사이트에 오신걸 환영합니다.
            </p>
            <h1>
                사과는 맛있습니다.
            </h1>
            <p>
                빨갛고 달달한 사과!
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;