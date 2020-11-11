import React from 'react';
import classes from './Background.module.css';

const Background = (props) => {
    return (
        <div className = {classes.Background} onClick = {props.clicked}>
            {props.children}
        </div>
    );
}

export default Background;
