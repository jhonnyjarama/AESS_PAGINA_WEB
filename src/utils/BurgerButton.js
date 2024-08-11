import React from "react";
import '../styles/BurgerButton.css'

const BurgerButton= (props)=> {
    return (
        <div onClick={props.handleClick} class={`icon nav-icon-5 ${props.clicked ? 'open':''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
};

export default BurgerButton;