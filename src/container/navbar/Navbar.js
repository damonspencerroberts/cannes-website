import React, { Component } from 'react';
import "./Navbar.module.css";
import classes from './Navbar.module.css';
import _ from 'lodash';
import NavLink from "./nav-links/Nav-link";

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            activeClass: 3
        }
    }

    render() {
        return (
            <div className= {classes.Navbar}> 
                <NavLink navclicked = {this.props.navClicked} className={classes.NavItem} to="/" exact>Home</NavLink>
                <NavLink navclicked = {this.props.navClicked} className={classes.NavItem} to={"/" + _.lowerCase("apartment")} >Apartment</NavLink> 
                <NavLink navclicked = {this.props.navClicked} className={classes.NavItem} to={"/" + _.lowerCase("cannes")}>Cannes</NavLink>
                <NavLink navclicked = {this.props.navClicked} className={classes.NavItem} to={"/" + _.lowerCase("beach")}>Beach</NavLink>
                <NavLink navclicked = {this.props.navClicked} className={classes.NavItem} to={"/" + _.lowerCase("contact")}>Contact</NavLink>
            </div>
        );
    }
}

export default Navbar;
