import React, { Fragment } from 'react';
import classes from './Form-type.module.css';

const formType = (props) => {
    let inputType = null;

    switch (props.elementType) {
        case ('input'):
            inputType = (
                <div className={classes.Fi1}>
                    <input 
                    className = {classes.Text}
                    {...props.elementConfig}
                    value = {props.value}
                    onChange={props.changed}/>
                </div>);
            break;
        case ('textarea'):
            inputType = (
                <div className={classes.Fi2}>
                    <textarea 
                    className = {classes.TextArea} 
                    {...props.elementConfig}
                    onChange={props.changed}/>
                </div>);
            break;
        default:
            inputType = (
                <div className={classes.Fi1}>
                    <input 
                    className = {classes.Text}
                    {...props.elementConfig}
                    value = {props.value}
                    onChange={props.changed}/>
                </div>);
            break;
    }


    return (
        <Fragment>
            {inputType}
        </Fragment>
    );
}

export default formType;
