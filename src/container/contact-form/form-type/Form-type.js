import React from 'react';
import {classes} from './Form-type.module.css';

const formType = (props) => {
    let inputType = null;

    switch (props.elementType) {
        case ('input'):
            inputType = <input 
                className = {classes.Text}
                {...props.elementConfig}
                value = {props.value}/>;
            break;
        case ('textarea'):
            inputType = <textarea 
                className = {classes.TextArea} 
                {...props}
                required/>;
            break;
        default:
            inputType = <input 
                className = {classes.Text}
                {...props.elementConfig}
                value = {props.value}/>;
            break;
    }


    return (
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputType}
        </div>
    );
}