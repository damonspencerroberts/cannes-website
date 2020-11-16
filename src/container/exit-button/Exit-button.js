import React from 'react';
import classes from "./Exit-button.module.css";

const Exit = (props) => <button className = {classes.Exit} onClick = {props.clicked}>X</button>

export default Exit;
