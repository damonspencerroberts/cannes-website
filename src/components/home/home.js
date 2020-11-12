import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';
import HrTag from '../../container/hr-tag/Hr-tag';
import Paragraph from '../../container/paragraph/Paragraph';
import paragraphData from '../paragraph-data/Paragraph-json';
import Gallery from '../../container/gallery/Gallery';
import homeJson from "../images-gallery/Home-gallery-json";
import homeBannerImg from "../../images/cannes-front.jpeg";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner
                    bannerImg = {homeBannerImg}
                    color = "rgb(255, 255, 255)"
                    header = "Bienvenue!"
                    opener = "Welcome to our Luxurious Apartment in the heart of the Cote D'azur."
                />
                <HrTag />
                <Paragraph 
                    elementParagraph = {paragraphData.home.paragraph}
                />
                <HrTag />
                <Gallery 
                    homeJson = {homeJson}
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}
