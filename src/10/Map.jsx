import React from 'react';
import ReactDOM from "react-dom/client";

function Map() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number =>
        <li>{number.toString()}</li>
    );


    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default Map;