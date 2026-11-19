import React from 'react';
import './FancyBorder.css';

function FancyBorder(props) {
    return (
        <div className="fancy-border">
            {props.children}
        </div>
    );
}

export default FancyBorder;