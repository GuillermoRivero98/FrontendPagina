import React from 'react';
import './Label.css';

const Label = ({ htmlFor, children }) => {
    return (
        <label className="label" htmlFor={htmlFor}>
            {children}
        </label>
    );
}

export default Label;