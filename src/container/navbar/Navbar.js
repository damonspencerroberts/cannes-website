import React, { Component } from 'react';
import "./Navbar.module.css";
import classes from './Navbar.module.css';

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
                    <a className={`${classes.NavItem} ${classes.Active}`}
                    href="/">Home</a>
                    <a className={classes.NavItem}
                    href="/">Apartment</a> 
                    <a className={classes.NavItem}
                    href="/">Cannes</a>
                    <a className={classes.NavItem}
                    href="/">Beach</a>
                    <a className={classes.NavItem}
                    href="/">Contact</a>
                </div>
        );
    }
}

export default Navbar;
