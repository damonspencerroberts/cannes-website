import React from 'react';
import classes from './Banner.module.css';


const Banner = (props) => {

    const backgroundImage = {
        backgroundImage: `linear-gradient(185deg, rgba(255, 227, 65, 0.507)0%, rgba(0, 0, 0, 0.534) 50%), url(${props.bannerImg})`,
        color: `${props.color}`
    }

    return (
        <div>
            <div 
                className={classes.Banner}
                style={backgroundImage}
            >
                <div className={classes.BannerContent}>
                    <h1>{props.header}</h1>
                    <p>{props.opener}</p>
                </div>
            </div>
        </div>
    );
}   

export default Banner;

