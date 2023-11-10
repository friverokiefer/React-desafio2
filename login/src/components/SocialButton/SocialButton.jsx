import React from 'react';
import './SocialButton.css';

function SocialButton({icon}) {
    return (
        <button className={`social-button ${icon}`}>
            <i className={`fa fa-${icon}`}></i>
        </button>
    );
}

export default SocialButton;
