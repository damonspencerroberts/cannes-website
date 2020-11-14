import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import classes from "./Social.module.css";


const Social = () => {
    const shareUrl = 'https://palaisbellevue.com';
    const title = 'Palais Bellevue, Cannes Luxury Rental';

    return(
        <div>
            <div className={`${classes.Each} ${classes.Facebook}`}>
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className={classes.EachButton}
                >
                <FacebookIcon size={32} borderRadius={3}/>
                </FacebookShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Twitter}`}>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className={classes.EachButton}
                >
                    <TwitterIcon size={32} borderRadius={3}/>
                </TwitterShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Whatsapp}`}>
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className={classes.EachButton}
                >
                    <WhatsappIcon size={32} borderRadius={3}/>
                </WhatsappShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Airbnb}`}>
                <a 
                    href="https://www.airbnb.co.uk/rooms/18335152?preview_for_ml=true&source_impression_id=p3_1604864045_Y1CIl0v%2Feg1r%2Folm"
                    target="_blank" 
                    rel="noreferrer"
                    className={classes.AirbnbLink}   
                >
                    <i className="fab fa-airbnb fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Social;
