import React from 'react';
import classes from './Review.module.css';
import "./Review.css";

const ReviewModal = (props) => {
    return(
        <div className = {classes.Each}>
            <i onClick = {props.leftClick} className="leftArrow far fa-arrow-alt-circle-left fa-2x"></i>
                {props.children}
            <i onClick = {props.rightClick} className="rightArrow far fa-arrow-alt-circle-right fa-2x"></i>
        </div>
    );
}

export default ReviewModal;
