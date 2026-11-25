import React from 'react';

function Card(props) {
    const {title, backgroundColor, children, p, apple} = props;

    return (
        <div>
            {title && <h1>{title}</h1>}
            {children}
            {p}
            {apple}
        </div>
    );
}

export default Card;