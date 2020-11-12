import React, {Component} from 'react';
import Banner from "../../container/banner/Banner";
import BannerImg from "../../images/folder/apt/a7.jpg";
import HrTag from "../../container/hr-tag/Hr-tag";
import Gallery from "../../container/gallery/Gallery";
import Images from "../images-gallery/Apt-gallery";

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
            <Gallery 
                homeJson = {Images}
            />
            <HrTag />
            </div>
        );
    }
}