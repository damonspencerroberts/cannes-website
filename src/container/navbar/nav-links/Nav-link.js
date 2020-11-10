import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Nav-links.module.css";

const NavItem = (props) => {
    return (
        <NavLink 
            {...props}
            activeClassName = {classes.Active}>
                {props.children}    
        </NavLink>
    );
}

export default NavItem;
