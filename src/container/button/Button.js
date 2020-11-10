import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <div className = {classes.Button}>
            <button type = {props.btnType}>Submit</button>
        </div>
    );
}

export default button;
