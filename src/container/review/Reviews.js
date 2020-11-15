import React, { Component } from 'react';
import classes from "./Review.module.css"

import ReviewModal from "./ReviewModal";


class Reviews extends Component{
    constructor() {
        super()

        this.state = {
            currentQuote: 0
        }

       this.handleLeftClick = this.handleLeftClick.bind(this);
       this.handleRightClick = this.handleRightClick.bind(this);

    }
    handleRightClick(identifier) {
        let curValue = identifier += 1;
        if (curValue >= 0 && curValue < this.props.reviewArray.length) {
            this.setState({currentQuote: curValue});
        } else {
            curValue = 0;
            this.setState({currentQuote: curValue});
        }
    }

    handleLeftClick(identifier) {
        let curValue = identifier -= 1;
        if (curValue >= 0 && curValue < this.props.reviewArray.length) {
            this.setState({currentQuote: curValue});
        } else {
            curValue = this.props.reviewArray.length - 1;
            this.setState({currentQuote: curValue});
        }
    }

    render() {
        const renderQuote = this.props.reviewArray.find(e => {
            return e.key === this.state.currentQuote;
        });

        console.log(renderQuote);


        return(
            <div className = {classes.Review}>
                <h1>Reviews</h1>
                    <ReviewModal rightClick = {() => this.handleRightClick(this.state.currentQuote)} leftClick = {() => this.handleLeftClick(this.state.currentQuote)}>
                        <p className = {classes.Quote}>"{renderQuote.quote}"</p>
                        <p className = {classes.Quote}>{renderQuote.person}</p>
                        <p className = {classes.Quote}>{renderQuote.key + 1}/{this.props.reviewArray.length}</p> 
                    </ReviewModal>
            </div>
        );
    }
} 

export default Reviews;
