import React from "react";
import PropTypes from 'prop-types';
import './Button.scss'


export const Button = ({ className, onClick, style, text }) => {

    return (
        <button
            className={className}
            onClick={onClick}
            style={style}>
            {text}
        </ button >
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string,
}