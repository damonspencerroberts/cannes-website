import React from 'react';
import classes from './Banner.module.css';


const Banner = (props) => {
    return (
        <div>
        <div className={classes.Banner}>
            <div className={classes.BannerContent}>
                <h1>Bienvenue!</h1>
                <p>Welcome to our Luxurious Apartment in the heart of the Cote D'azur.</p>
            </div>
        </div>
        </div>
    );
}   

export default Banner;
