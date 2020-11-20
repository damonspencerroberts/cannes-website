import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import Paragraph from "../../container/paragraph/Paragraph";
import Gallery from "../../container/gallery/Gallery";
import ContactData from "../../container/contact-form/Contact-form";
import ParagraphData from "../paragraph-data/Paragraph-json";
import Images from "../images-gallery/Beach-gallery";
import HrTag from "../../container/hr-tag/Hr-tag";
import BannerImg from "../../images/banner/b4.jpg";
import {Helmet} from "react-helmet";

export default class Beach extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>World Famous Beach</title>
                    <meta name="Cannes Site" content="World Famous Cannes Beach" />
                    <meta name="author" content="Michelle Roberts" />
                    <meta name="description" content="Our apartment is located 4 
                        minutes from the Plage du Midi beaches. All year round you will 
                        find people playing volleyball or just relaxing on the white sand 
                        beaches. There is a beautiful pedestrian promenade where you can walk 
                        into the centre of Cannes in one direction and to Cannes La Bocca in 
                        the other. This is popular with joggers and walkers alike."
                    />
                    <meta name="robots" content="index, follow" />
                </Helmet>
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