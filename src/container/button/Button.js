import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <div className = {classes.Button}>
            <button type = {props.btnType}>{props.buttonContent}</button> 
        </div>
    );
}

export default button;
