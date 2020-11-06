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
                    <a className={`${classes.NavItem} ${this.state.activeClass === 0 ? classes.Active : null}`} 
                    onClick={()=> this.setState({activeClass: 0})}
                    href="/">Home</a>
                    <a className={`${classes.NavItem} ${this.state.activeClass === 1 ? classes.Active : null}`} 
                    onClick={()=> this.setState({activeClass: 1})}
                    href="/">Beach</a>
                    <a className={`${classes.NavItem} ${this.state.activeClass === 2 ? classes.Active : null}`} 
                    onClick={()=> this.setState({activeClass: 2})}
                    href="/">Gallery</a>
                    <a className={`${classes.NavItem} ${this.state.activeClass === 3 ? classes.Active : null}`} 
                    onClick={()=> this.setState({activeClass: 3})}
                    href="/">Cannes</a>
                    <a className={`${classes.NavItem} ${this.state.activeClass === 4 ? classes.Active : null}`} 
                    onClick={()=> this.setState({activeClass: 4})}
                    href="/">Contact</a>
                </div>
        );
    }
}

export default Navbar;
