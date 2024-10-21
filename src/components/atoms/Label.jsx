import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/atoms/Label.css';

const Label = ({ htmlFor, children }) => {
    return (
        <label className="label" htmlFor={htmlFor}>
            {children}
        </label>
    );
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Label;