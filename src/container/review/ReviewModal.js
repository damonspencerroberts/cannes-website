import React from 'react';
import classes from './Review.module.css';
import "./Review.css";

const ReviewModal = (props) => {

    const smallScreen = window.innerWidth < 500;
    let right, left;
    right = ["leftArrow", "far", "fa-arrow-alt-circle-left"];
    left = ["rightArrow", "far", "fa-arrow-alt-circle-right"];

    if (!smallScreen) {
        right.push("fa-2x");
        left.push("fa-2x");
    }

    return(
        <div className = {classes.Each}>
            <i onClick = {props.leftClick} className={left.join(' ')}></i>
                {props.children}
            <i onClick = {props.rightClick} className={right.join(' ')}></i>
        </div>
    );
}

export default ReviewModal;
