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
import Maps from "../../container/maps/Maps";
import {Helmet} from "react-helmet";


export default class Home extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Cannes Palais Bellevue Rental</title>
                    <meta name="Cannes Site" content="Luxury Rental Apartment in Cannes." />
                    <meta name="author" content="Michelle Roberts" />
                    <meta name="description" content="Luxurious Rental Apartment in the heart of the Cote D'azur.
                    We are situated only a few minutes from some of the nicest beaches in Cannes and around a 15 
                    minute walk to the Palais des Festival. We are the ideal location for either a fabulous Summer 
                    vacation or as the perfect base for you to attend one of the numerous Congresses held every year." />
                    <meta name="robots" content="index, follow" />
                </Helmet>
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
                <Gallery 
                    homeJson = {Images}
                />
                <HrTag />
                <Reviews 
                    reviewArray = {ReviewData}
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
