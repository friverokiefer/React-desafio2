import React from 'react';
import './Alert.css';

function Alert({ message, color }) {
    const alertClass = `alert alert-${color}`;
    
    return (
        <div className={alertClass} role="alert">
            {message}
        </div>
    );
}

export default Alert;
