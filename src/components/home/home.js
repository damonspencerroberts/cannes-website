import React, { Component } from 'react';
import Banner from '../../container/banner/Banner';
import ContactForm from '../../container/contact-form/Contact-form';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <ContactForm />
            </div>
        );
    }
}