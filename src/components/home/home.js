import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';
import HrTag from '../../container/hr-tag/Hr-tag';
import Paragraph from '../../container/paragraph/Paragraph';
import paragraphData from '../paragraph-data/Paragraph-json';
import Gallery from '../../container/gallery/Gallery';
import Images from "../images-gallery/Home-gallery-json";
import homeBannerImg from "../../images/cannes-front.jpeg";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner
                    bannerImg = {homeBannerImg}
                    color = "rgb(255, 255, 255)"
                    highlightColor = "rgba(255, 227, 65, 0.507)"
                    header = "Bienvenue!"
                    opener = "Welcome to our Luxurious Apartment in the heart of the Cote D'azur."
                />
                <HrTag />
                <Paragraph 
                    header = {paragraphData.home.header}
                    elementParagraph1 = {paragraphData.home.paragraph1}
                    elementParagraph2 = {paragraphData.home.paragraph2}
                    elementParagraph3 = {paragraphData.home.paragraph3}
                    findLink
                />
                <HrTag />
                <Gallery 
                    homeJson = {Images}
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}
