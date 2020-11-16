import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import Paragraph from "../../container/paragraph/Paragraph";
import Gallery from "../../container/gallery/Gallery";
import ContactData from "../../container/contact-form/Contact-form";
import ParagraphData from "../paragraph-data/Paragraph-json";
import Images from "../images-gallery/Beach-gallery";
import HrTag from "../../container/hr-tag/Hr-tag";
import BannerImg from "../../images/banner/b4.jpg";

export default class Beach extends Component {
    render() {
        return(
            <div>
                <Banner 
                    bannerImg={BannerImg}
                    header = "La Plage"
                    highlightColor="rgba(90, 90, 90, 0.507)"
                />
                <HrTag />
                <Paragraph 
                    header = {ParagraphData.beach.header}
                    paragraphArray = {ParagraphData.beach.paragraph}
                    findLink
                />
                <HrTag />
                <Gallery 
                    homeJson = {Images}
                    header
                    headerContent = "Beach gallery"
                />
                <HrTag />
                <ContactData />
                <HrTag />
            </div>
        );
    }
}