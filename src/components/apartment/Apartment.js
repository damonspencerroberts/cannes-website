import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import BannerImg from "../../images/banner/b2.jpg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Gallery from "../../container/gallery/Gallery";
import Images from "../images-gallery/Apt-gallery";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from "../paragraph-data/Paragraph-json";
import ContactForm from "../../container/contact-form/Contact-form";
import {Helmet} from "react-helmet";


export default class Apartment extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Palais Bellevue Apartment Cannes</title>
                    <meta name="Cannes Palais Bellevue Apartment" content="Luxury Rental Apartment in Cannes." />
                    <meta name="author" content="Michelle Roberts" />
                    <meta name="description" content="Our apartment is located in the beautiful Palais 
                        Bellevue building. Palais Bellevue was originally constructed in 1858 to cater to the 
                        many English tourists who had begun to discover the delights of this sleepy fishing village. 
                        When you step inside the marble lobby, it is easy to imagine a string quartet playing in the 
                        corner, whilst fashionable tourists stroll around the grounds, taking in the beautiful surroundings 
                        and sea air." />
                    <meta name="robots" content="index, follow" />
               </Helmet> 
               <Banner 
                    bannerImg={BannerImg}
                    header = "Palais Bellevue"
                    highlightColor="rgba(90, 90, 90, 0.507)"
                />
                <HrTag />
                <Paragraph 
                    header={ParagraphData.apartment.header}
                    paragraphArray={ParagraphData.apartment.paragraph}
                    table
                    findLink
                />
                <HrTag />
                <Gallery 
                    homeJson = {Images}
                    header
                    headerContent = "Apartment gallery"
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}