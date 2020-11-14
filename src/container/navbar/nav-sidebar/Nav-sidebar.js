import React, { Component, Fragment } from 'react';
import classes from './Nav-sidebar.module.css';
import Backdrop from '../../hoc/background/Background';
import Logo from '../../logo/Logo';
import NavItems from "../Navbar";



class SideBar extends Component {
    constructor() {
        super()

        this.state = {
            showSide: false
        }

        this.handleShowSide = this.handleShowSide.bind(this);
    }

    handleShowSide() {
        this.setState({showSide: !this.state.showSide})
    }

    render () {
        let AttClasses = [classes.SideDrawer, classes.Close];


        if (this.state.showSide) {
            AttClasses = [classes.SideDrawer, classes.Open]
        }

        return(
            <Fragment>
                <Backdrop clicked = {this.handleShowSide}/>
                <div className = {AttClasses.join(' ')}>
                    <div className = {classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavItems />
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default SideBar;
