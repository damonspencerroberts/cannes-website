import React, { Component } from 'react';
import classes from './Contact-form.module.css';

class ContactForm extends Component {
    render() {
        return(
            <div>
                <div className = {classes.Form}>
                    <h3 className ={classes.Title}>Contact us here</h3>
                    <p className = {classes.Addy}>11 Avenue Jean de Noailles, Cannes 06400, France</p>
                
                    <form>
                        <div className={classes.fi1}>
                            <input type="text" name="name" id="name" placeholder = "Enter your name" required />
                        </div>
                        <div className={classes.fi1}>
                            <input type="email" name="email" id="email" placeholder = "Enter your email" required />
                        </div>
                        <div className={classes.fi2}>
                            <textarea id="story" name="story" placeholder = "Enter your message" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default ContactForm;
