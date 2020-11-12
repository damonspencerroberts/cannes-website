import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import ContactImg from "../../images/contact/ct.jpeg";
import HrTag from "../../container/hr-tag/Hr-tag";

export default class Contact extends Component {
    render() {
        return(
            <div>
                <Banner 
                    bannerImg={ContactImg}
                    header = "Contact us"
                />
                <HrTag />
            </div>
        );
    }
}