import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import HrTag from "../../container/hr-tag/Hr-tag";
import Gallery from "../../container/gallery/Gallery";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from "../paragraph-data/Paragraph-json";
import ContactForm from "../../container/contact-form/Contact-form";
import Images from "../images-gallery/Cannes-gallery";
import BannerImg from "../../images/banner/b3.jpg";
import {Helmet} from "react-helmet";

export default class Cannes extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>The Beautiful Cannes</title>
                    <meta name="Cannes Site" content="The Beautiful Cannes City" />
                    <meta name="author" content="Michelle Roberts" />
                    <meta name="description" content="Cannes is famous the world over for 
                        its annual Cannes film festival. It is the place where the rich and 
                        famous come to see and be seen during this annual celebration of the 
                        silver screen. There are many other festivals that take place during 
                        the year also."
                    />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <Banner 
                    bannerImg={BannerImg}
                    header = "Ville de Cannes"
                    highlightColor="rgba(90, 90, 90, 0.507)"
                />
                <HrTag />
                <Paragraph 
                    header={ParagraphData.cannes.header}
                    paragraphArray={ParagraphData.cannes.paragraph}
                    findLink
                />
                <HrTag />
                <Gallery 
                    homeJson = {Images}
                    header
                    headerContent = "Cannes gallery"
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}