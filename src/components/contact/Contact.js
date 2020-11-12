import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import ContactImg from "../../images/contact/ct.jpeg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from '../paragraph-data/Paragraph-json';
import ContactForm from "../../container/contact-form/Contact-form";


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
                    elementParagraph = {ParagraphData.contact.paragraph}
                    linkPara = {ParagraphData.contact.linkParagraph}
                    link1 = {ParagraphData.contact.link1}
                    link2 = {ParagraphData.contact.link2}
                    link1Words = {ParagraphData.contact.p1}
                    link2Words = {ParagraphData.contact.p2}
                    chunk = {15}
                    links
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}