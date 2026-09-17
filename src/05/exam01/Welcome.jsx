import React from "react";

function Welcome(props) {
    return(
        <h1 className={`welcome ${props.colorClass}`}>안녕하세요~{props.name}님</h1>
    );
}

export default Welcome;