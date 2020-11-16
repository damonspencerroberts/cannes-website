import React, { Component } from 'react';
import classes from "../Contact-form.module.css";
import Input from "../form-type/Form-type";
import Button from "../../button/Button";
import emailjs from "emailjs-com";
import Spinner from "../../spinner/spinner";
import ExitButton from "../../exit-button/Exit-button";


export default class LeaveReview extends Component {

    constructor() {
        super()

        this.state = {
            reviewForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enter your name'
                    },
                    value: ''
                },
                nationality: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enter your nationality'
                    },
                    value: ''
                },
                comment: {
                    elementType: 'textarea',
                    elementConfig: {
                        name: "comment",
                        form: "review-form",
                        placeholder: 'Enter your comment'
                    },
                    value: ''
                }
            },
            spinner: false,
            confirmation: false
        }

        this.handleReviewForm = this.handleReviewForm.bind(this);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);

    }

    handleReviewForm(event, identifier) {
        const newForm = {
            ...this.state.reviewForm
        }

        const currentElement = {
            ...newForm[identifier]
        }

        currentElement.value = event.target.value;

        newForm[identifier] = currentElement;

        this.setState({reviewForm: newForm});
    }

    handleReviewSubmit(e) {

        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID_REVIEW;
        const userId = process.env.REACT_APP_USER_ID;
        
        const adding = {
            from_message: this.state.reviewForm.comment.value,
            from_name: this.state.reviewForm.name.value,
            from_nationality: this.state.reviewForm.nationality.value
        }

        this.setState({spinner: true});
        
        emailjs.send(serviceId, templateId, adding, userId)
            .then((result) => {
                this.setState({spinner: false});
                console.log(result.text + " successful email sent!");
                const dup = {...this.state.reviewForm}
                dup.name.value = '';
                dup.nationality.value = '';
                dup.comment.value = '';
                this.setState({confirmation: true, reviewForm: dup});

            }, (error) => {
                this.setState({spinner: false});
                alert(error.text);
            });
    }

    render() {

        const reviewFormElements = [];
        for (let e in this.state.reviewForm) {
            reviewFormElements.push({
                id: e,
                config: this.state.reviewForm[e]
            });
        }
        
        console.log(reviewFormElements);
        return(
            <div className = {classes.Rev}>
                <ExitButton clicked = {this.props.exitClicked} />
                <div className = {classes.Form} id = "form-of-review">
                    <h1 className ={classes.Title}>Leave us a review</h1>
                    {!this.state.confirmation ? <p className = {classes.Addy}>We appreciate your feedback!</p> : null}
                    {this.state.confirmation ? <p className = {classes.Feedback}>Thank you for your feedback!</p> : null}
                    {this.state.spinner ? <Spinner /> : <form id = "review-form" onSubmit = {this.handleReviewSubmit} >
                        {reviewFormElements.map(e => {
                            return (
                                <Input 
                                    key = {e.id}
                                    elementType = {e.config.elementType}
                                    elementConfig = {e.config.elementConfig}
                                    value = {e.config.value}
                                    changed = {(event) => this.handleReviewForm(event, e.id)}
                                />
                            );
                        })}
                        <Button btnType = "submit" buttonContent = "Submit" />
                    </form>}
                </div>
                
            </div>
        );
    }
}