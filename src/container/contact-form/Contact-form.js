import React, { Component } from 'react';
import classes from './Contact-form.module.css';
import Button from '../button/Button';
import Input from './form-type/Form-type';

class ContactForm extends Component {
    constructor() {
        super()

        this.state = {
            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enter your name'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Enter your email'
                    },
                    value: ''
                },
                comment: {
                    elementType: 'textarea',
                    elementConfig: {
                        name: "comment",
                        form: "contact-form",
                        placeholder: 'Enter your message'
                    },
                    value: ''
                }
            }
        }

        this.handleContactForm = this.handleContactForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleContactForm(event, identifier) {
        const newForm = {
            ...this.state.contactForm
        }

        const currentElement = {
            ...newForm[identifier]
        }

        currentElement.value = event.target.value;

        newForm[identifier] = currentElement;

        this.setState({contactForm: newForm});

        console.log(newForm);

    }

    handleFormSubmit() {
        //have to handle email send here.
        
        alert(`Thank you for your request. You details are: 
        - Email: ${this.state.contactForm.email.value}
        - Name: ${this.state.contactForm.name.value}
        - Message: ${this.state.contactForm.comment.value}
        `);
    }

    render() {
        const contactFormElements = [];
        for (let e in this.state.contactForm) {
            contactFormElements.push({
                id: e,
                config: this.state.contactForm[e]
            });
        }
        console.log(contactFormElements);
        return(
            <div>
                <div className = {classes.Form}>
                    <h3 className ={classes.Title}>Contact us here</h3>
                    <p className = {classes.Addy}>11 Avenue Jean de Noailles, Cannes 06400, France</p>
                
                    <form id = "contact-form" onSubmit = {this.handleFormSubmit} >
                        {contactFormElements.map(e => {
                            return (
                                <Input 
                                    key = {e.id}
                                    elementType = {e.config.elementType}
                                    elementConfig = {e.config.elementConfig}
                                    value = {e.config.value}
                                    changed = {(event) => this.handleContactForm(event, e.id)}
                                />
                            );
                        })}
                        <Button btnType = "submit" buttonContent = "Submit" />
                    </form>
                </div>
                
            </div>
        );
    }
}

export default ContactForm;
