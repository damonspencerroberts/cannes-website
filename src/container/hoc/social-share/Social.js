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

    const smallWindow = window.innerWidth < 500;

    let sizeSocial = 32;
    let sizeAirbnb = ["fab", "fa-airbnb", "fa-2x"]
    if (!smallWindow) {
        sizeSocial = 50;
        sizeAirbnb.splice(-1, 1);
        sizeAirbnb.push("fa-3x");
    }

    return(
        <div>
            <div className={`${classes.Each} ${classes.Facebook}`}>
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className={classes.EachButton}
                >
                <FacebookIcon size={sizeSocial} borderRadius={3}/>
                </FacebookShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Twitter}`}>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className={classes.EachButton}
                >
                    <TwitterIcon size={sizeSocial} borderRadius={3}/>
                </TwitterShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Whatsapp}`}>
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className={classes.EachButton}
                >
                    <WhatsappIcon size={sizeSocial} borderRadius={3}/>
                </WhatsappShareButton>
            </div>

            <div className={`${classes.Each} ${classes.Airbnb}`}>
                <a 
                    href="https://www.airbnb.co.uk/rooms/18335152?preview_for_ml=true&source_impression_id=p3_1604864045_Y1CIl0v%2Feg1r%2Folm"
                    target="_blank" 
                    rel="noreferrer"
                    className={classes.AirbnbLink}   
                >
                    <i className={sizeAirbnb.join(" ")}></i>
                </a>
            </div>
        </div>
    );
}

export default Social;
