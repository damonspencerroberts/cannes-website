import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import ContactImg from "../../images/banner/b5.jpg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from '../paragraph-data/Paragraph-json';
import ContactForm from "../../container/contact-form/Contact-form";
import Maps from "../../container/maps/Maps";


export default class Contact extends Component {
    render() {
        return(
            <div>
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