/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import classes from './Footer.module.css';
import LeaveReview from "../contact-form/leave-review/Leave-review";


class Footer extends Component {
    constructor() {
        super()

        this.state = {
            review: false
        }

        this.handleReview = this.handleReview.bind(this);

    }

    handleReview() {
        this.setState({review: !this.state.review});
    }

    render() {
        return (
            <div className = {classes.Footer}>
                <div className = {classes.Links}>
                    <a 
                        href="https://www.airbnb.co.uk/rooms/18335152?preview_for_ml=true&source_impression_id=p3_1604864045_Y1CIl0v%2Feg1r%2Folm"
                        target="_blank" 
                        rel="noreferrer">
                        <i className="fab fa-airbnb"></i> Book via Airbnb
                    </a>
                    <a href="/contact"><i className="fas fa-envelope"></i> Find out more</a>
                </div>
                
                <div className = {classes.Links}>
                    <a href="https://www.domainedebeaucour.com" target ="_blank" rel="noreferrer"><i className="fas fa-globe-europe"></i> Dordogne property</a>
                </div>
                <div className = {classes.Links}>
                    <a onClick = {this.handleReview}><i className="far fa-edit"></i> Leave a review</a>
                </div>
                {this.state.review ? <LeaveReview exitClicked = {this.handleReview} /> : null}
                <div className = {classes.Copyright}>
                    <p>Designed by Damon Roberts, DRS ©</p>
                </div>
            </div>
        );
    }
}


export default Footer;


/*<i className="fab fa-airbnb"></i>
<i className="fas fa-envelope"></i> 
<i className="far fa-copyright"></i>
*/