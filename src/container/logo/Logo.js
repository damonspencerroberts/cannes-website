import React from 'react';
import LogoPic from '../../images/bellevueLogo.png';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Div}>
            <a href = "/"><img src={LogoPic} alt = "logo-bellevue" className={classes.Image} /></a>
        </div>
    );
}

export default Logo;
