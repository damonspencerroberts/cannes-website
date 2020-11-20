import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import ContactImg from "../../images/banner/b5.jpg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from '../paragraph-data/Paragraph-json';
import ContactForm from "../../container/contact-form/Contact-form";
import Maps from "../../container/maps/Maps";
import {Helmet} from "react-helmet";


export default class Contact extends Component {
    
    render() {
        return(
            <div>
                <Helmet>
                    <title>Palais Bellevue Contact Page</title>
                    <meta name="Cannes Site" content="Contact Page for Palais Belleuve" />
                    <meta name="author" content="Michelle Roberts" />
                    <meta name="description" content="The apartment can be rented on a weekly basis 
                        (7 night minimum) in the Summer months. During any Festival booking, there is a 
                        three night minimum stay. Please use the contact form to enquire regarding pricing 
                        or alternatively, you can book via our Airbnb site." 
                    />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <Banner 
                    bannerImg={ContactImg}
                    header = "Contact us"
                    highlightColor="rgba(90, 90, 90, 0.507)"
                />
                <HrTag />
                <Paragraph 
                    header = {ParagraphData.contact.header}
                    paragraphArray = {ParagraphData.contact.paragraph}
                    links
                />
                <HrTag />
                <Maps />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}