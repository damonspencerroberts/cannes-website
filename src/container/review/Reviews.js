import React from 'react';
import classes from "./Review.module.css"

const Reviews = (props) => {

    return(
        <div className = {classes.Review}>
            <h1>What people have said</h1>
            <div className = {classes.Each}>
                <p className = {classes.Quote}>"This apartmnet is amazing. Its excellent, nothing else beats it. I would reccomdent it to all my friends and colleagues. Thank you for a fantastic stay!"</p>
                <p className = {classes.Quote}>Dennis Koefner <span className = {classes.Nationality}>from Austria</span></p>
            </div>
        </div>
    );

}

export default Reviews;
