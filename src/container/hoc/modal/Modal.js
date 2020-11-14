import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css';
import Background from '../background/Background';
import "./Icons.css";


export default class Modal extends Component {

    render() {
        return(
            <Fragment>
                <Background clicked = {this.props.clicked} show/>
                <div className = {classes.Modal}>
                    
                    {this.props.children} 
                    
                                           
                    <div>
                        <i className="fas fa-arrow-alt-circle-left fa-2x right" onClick = {this.props.leftClick}></i>
                        <i className="fas fa-arrow-alt-circle-right fa-2x right" onClick = {this.props.rightClick}></i>
                    </div>
                </div>
            </Fragment>
        );
    }
}