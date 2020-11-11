import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';
import HrTag from '../../container/hr-tag/Hr-tag';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <HrTag />
                <ContactForm />
                <HrTag />
            </div>
        );
    }
}