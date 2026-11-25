import React from 'react';
import {categories} from "./listings";

function CategoryBar(props) {
    const {selected, onSelect} = props;

    return (
        <div className="category-bar">
            {categories.map((c) => (
                <button
                    key={c.id}
                    className={selected === c.id ? "category active" : "category"}
                    onClick={() => onSelect(c.id)}
                >
                    <span className="category-icon">{c.icon}</span>
                    <span>{c.label}</span>
                </button>
            ))}
        </div>
    );
}

export default CategoryBar;
