import React from 'react';
import FancyBorder from "../ex1/FancyBorder";
import "../ex1/FancyBorder.css";

function Dialog(props) {
    return (
        <div>
            <FancyBorder>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.message}
                </p>
            </FancyBorder>
        </div>
    );
}

export default Dialog;