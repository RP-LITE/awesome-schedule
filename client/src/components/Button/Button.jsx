import React, { useState } from "react";
import "./Button.css";

const Button = ({children}) => {
    cost [isHover, setIsHover] useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }
    const handleMouseLeave = () => {
        setIsHover(false)};

        return(
            <button className="btn">{children}</button>
        )
};

