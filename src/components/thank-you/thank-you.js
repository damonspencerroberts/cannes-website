import React from 'react';
import Banner from "../../container/banner/Banner";
import HrTag from "../../container/hr-tag/Hr-tag";
import Image from "../../images/banner/b6.jpg";
import {withRouter} from "react-router-dom";
import Button from "../../container/button/Button";
import { Helmet } from "react-helmet";


const ThankYou = (props) => {

    const goHome = () => {
        props.history.push("/");
    }
    
    return(
        <div>
            <Helmet>
                <title>Thank you from us</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Banner 
                bannerImg={Image}
                header = "Thank You"
                opener = "Thank you for submitting your information. We will be sure to get back to you as soon as possible."
                highlightColor="rgba(90, 90, 90, 0.507)"
            />
            <Button 
                buttonContent = "Homepage"
                clicked = {goHome}
            />
            <HrTag />
        </div>
    );
}

export default withRouter(ThankYou);
