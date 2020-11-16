import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css';
import Background from '../background/Background';
import "./Icons.css";
import Exit from "../../exit-button/Exit-button";


export default class Modal extends Component {

    render() {
        const smallWindow = window.innerWidth < 500;

        let right = ["fas", "fa-arrow-alt-circle-right", "right", "fa-2x"];
        let left = ["fas", "fa-arrow-alt-circle-left", "right", "fa-2x"]
        if (!smallWindow) {
            right.splice(-1, 1);
            left.splice(-1, 1);
            right.push("fa-3x");
            left.push("fa-3x");
        }

        return(
            <Fragment>
                <Background clicked = {this.props.clicked} show/>
                <div className = {classes.Modal}>
                    <Exit clicked = {this.props.exitClicked} />
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