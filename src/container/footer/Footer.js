import React from 'react';
import classes from './Footer.module.css';

const footer = () => {
    return (
    <div className = {classes.Footer}>
        <div className = {classes.Links}>
            <a 
                href="https://www.airbnb.co.uk/rooms/18335152?preview_for_ml=true&source_impression_id=p3_1604864045_Y1CIl0v%2Feg1r%2Folm"
                target="_blank" 
                rel="noreferrer">
                <i className="fab fa-airbnb"></i> Book via Airbnb
            </a>
            <a href="/contact"><i className="fas fa-envelope"></i> Find out more</a>
        </div>
        
        <div className = {classes.Links}>
            <a href="https://www.domainedebeaucour.com" target ="_blank" rel="noreferrer"><i class="fas fa-globe-europe"></i> Explore France</a>
        </div>
        
        <div className = {classes.Copyright}>
            <p>Designed by Damon Roberts, DRS ©</p>
        </div>
    </div>
    );
}  

export default footer;


/*<i className="fab fa-airbnb"></i>
<i className="fas fa-envelope"></i> 
<i className="far fa-copyright"></i>
*/