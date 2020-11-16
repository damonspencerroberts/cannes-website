import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';
import HrTag from '../../container/hr-tag/Hr-tag';
import Paragraph from '../../container/paragraph/Paragraph';
import paragraphData from '../paragraph-data/Paragraph-json';
import Gallery from '../../container/gallery/Gallery';
import Images from "../images-gallery/Home-gallery-json";
import homeBannerImg from "../../images/banner/b1.jpg";
import Reviews from "../../container/review/Reviews";
import ReviewData from "../reviews-json/reviews-json";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner
                    bannerImg = {homeBannerImg}
                    color = "rgb(255, 255, 255)"
                    highlightColor = "rgb(0,0,0,0.2)"
                    header = "Bienvenue!"
                    opener = "Welcome to our Luxurious Apartment in the heart of the Cote D'azur."
                />
                <HrTag />
                <Paragraph 
                    header = {paragraphData.home.header}
                    paragraphArray = {paragraphData.home.paragraph}
                    findLink
                />
                <HrTag />
                <Reviews 
                    reviewArray = {ReviewData}
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
