import React, { Component } from 'react';
import "./Navbar.module.css";
import classes from './Navbar.module.css';
import _ from 'lodash';

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
                <a className={`${classes.NavItem} ${classes.Active}`} href="/">Home</a>
                <a className={classes.NavItem} href={"/" + _.lowerCase("apartment")} >Apartment</a> 
                <a className={classes.NavItem} href={"/" + _.lowerCase("cannes")}>Cannes</a>
                <a className={classes.NavItem} href={"/" + _.lowerCase("beach")}>Beach</a>
                <a className={classes.NavItem} href={"/" + _.lowerCase("contact")}>Contact</a>
            </div>
        );
    }
}

export default Navbar;
