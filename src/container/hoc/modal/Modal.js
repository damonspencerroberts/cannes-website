import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css';
import Background from '../background/Background';
import "./Icons.css";


export default class Modal extends Component {

    render() {
        const smallWindow = window.innerWidth < 500;

        let right = ["fas", "fa-arrow-alt-circle-right", "right"];
        let left = ["fas", "fa-arrow-alt-circle-left", "right"]
        if (!smallWindow) {
            right.push("fa-2x");
            left.push("fa-2x");

        }

        return(
            <Fragment>
                <Background clicked = {this.props.clicked} show/>
                <div className = {classes.Modal}>
                    
                    {this.props.children} 
                    
                                           
                    <div className = "IconsDiv">
                        <i className={left.join(" ")} onClick = {this.props.leftClick}></i>
                        <i className={right.join(" ")} onClick = {this.props.rightClick}></i>
                    </div>
                </div>
            </Fragment>
        );
    }
}