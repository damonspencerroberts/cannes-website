import React, { Component, Fragment } from 'react';
import classes from './Gallery.module.css';
import HomeJson from '../../components/images-gallery/Home-gallery-json';
import Modal from '../hoc/modal/Modal';
import Button from '../button/Button';

export default class Gallery extends Component {
    constructor() {
        super()


        this.state = {
            eachPhoto: false,
            individualPic: null
        }

        this.handleBackgroundPic = this.handleBackgroundPic.bind(this);
        this.handleLargeImage = this.handleLargeImage.bind(this);
    }

    handleLargeImage(identifier) {
        console.log(identifier);
        const foundPic = HomeJson.find(e => {
            return e.key === identifier;
        });

        console.log(foundPic.source);

        this.setState({eachPhoto: !this.state.eachPhoto, individualPic: foundPic.source});


    }

    handleBackgroundPic() {
        this.setState({eachPhoto: !this.state.eachPhoto});
    }

    render() {
        const pic = this.state.eachPhoto;
        
        return(
            <Fragment>
                {pic ? 
                    <Modal clicked = {this.handleBackgroundPic}>
                        <img className = {classes.LargeImage} src = {this.state.individualPic} alt = "ind-pic" />
                    </Modal>: null}
                <div className={classes.Gallery}>
                    {HomeJson.map(e => {
                        return (
                            <div className={classes.Links} key = {e.key} onClick = {() => this.handleLargeImage(e.key)}> 
                                <img src={e.source} alt={e.key} className={classes.Images} />
                            </div>
                        );
                    })}
                </div>
            </Fragment>
        );
    }
}