import React from 'react';
import classes from './Background.module.css';

const Background = (props) => props.show ? <div className = {classes.Background} onClick = {props.clicked} > {props.children} </div> : null

export default Background;
