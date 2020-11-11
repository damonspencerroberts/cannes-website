import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css';
import Background from '../background/Background';

export default class Modal extends Component {

    render() {
        return(
            <Fragment>
                <Background clicked = {this.props.clicked} />
                <div className = {classes.Modal}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}