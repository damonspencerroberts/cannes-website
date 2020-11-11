import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';
import HrTag from '../../container/hr-tag/Hr-tag';
import Paragraph from '../../container/paragraph/Paragraph';
import paragraphData from '../paragraph-data/Paragraph-json';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <HrTag />
                <Paragraph 
                    elementParagraph = {paragraphData.home.paragraph}
                />
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}