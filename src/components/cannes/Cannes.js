import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import HrTag from "../../container/hr-tag/Hr-tag";
import Gallery from "../../container/gallery/Gallery";
import Paragraph from "../../container/paragraph/Paragraph";
import ParagraphData from "../paragraph-data/Paragraph-json";
import ContactForm from "../../container/contact-form/Contact-form";
import Images from "../images-gallery/Cannes-gallery";
import BannerImg from "../../images/banner/b3.jpg";

export default class Cannes extends Component {
    render() {
        return(
            <div>
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