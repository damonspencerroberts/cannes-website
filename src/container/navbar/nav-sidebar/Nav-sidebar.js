import React, { Component, Fragment } from 'react';
import classes from './Nav-sidebar.module.css';
import Backdrop from '../../hoc/background/Background';
import Logo from '../../logo/Logo';
import NavItems from "../Navbar";



class SideBar extends Component {
    
    render () {
        let AttClasses = [classes.SideDrawer, classes.Close];


        if (this.props.showSide) {
            AttClasses = [classes.SideDrawer, classes.Open]
        }

        return(
            <Fragment>
                <Backdrop clicked = {this.props.clicked} show = {this.props.showSide}/>
                <div className = {AttClasses.join(' ')}>
                    <div className = {classes.Logo}>
                        <Logo />
                    </div>
                    <nav onClick = {this.props.navclicked} >
                        <NavItems />
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default SideBar;
