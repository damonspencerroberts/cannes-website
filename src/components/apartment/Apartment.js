import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import BannerImg from "../../images/banner/b2.jpg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Gallery from "../../container/gallery/Gallery";
import Images from "../images-gallery/Apt-gallery";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from "../paragraph-data/Paragraph-json";
import ContactForm from "../../container/contact-form/Contact-form";

export default class Apartment extends Component {
    render() {
        return(
            <div>
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