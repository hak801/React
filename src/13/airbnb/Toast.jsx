import React from 'react';

function Toast(props) {
    const {message} = props;

    if (!message) return null;

    return (
        <div className="toast" role="status" aria-live="polite">
            {message}
        </div>
    );
}

export default Toast;
