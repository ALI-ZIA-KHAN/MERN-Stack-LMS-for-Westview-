import React from 'react'
import "./Button.css";
import {Link} from "react-router-dom";

const STYLES = ["butn--primary", "butn--outline"];

const SIZES = ["butn--medium", "butn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to = "sign-up" classNmae = "butn-mobile">
            <button /* WILL AUTOMATICALLY DISPLAY THE THE BUTTON COMPONENTS LIKE GET STARTED ETC*/
            className = {`butn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
            >
                {children}
            </button>
        </Link>
    )
};




/*imr*/