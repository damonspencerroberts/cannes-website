import React from 'react';
import classes from "./Burger-menu.module.css";

const BurgerMenu = (props) => {

    return(
        <div onClick = {props.clicked} className = {classes.Burger}>
            <i  className="fas fa-bars fa-2x"></i>
        </div>
    );
}

export default BurgerMenu;
