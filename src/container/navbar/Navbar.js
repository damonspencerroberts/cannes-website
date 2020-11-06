import React, { Component } from 'react';
import "./Navbar.module.css";
import classes from './Navbar.module.css';

class Navbar extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
                <div className={classes.Navbar}> 
                    <a className={classes.NavItem} href="/">Home</a>
                    <a className={classes.NavItem} href="/beach">Beach</a>
                    <a className={classes.NavItem} href="/gallery">Gallery</a>
                    <a className={classes.NavItem} href="/cannes">Cannes</a>
                    <a className={classes.NavItem} href="/contact">Contact</a>
                </div>
        );
    }
}

export default Navbar;
