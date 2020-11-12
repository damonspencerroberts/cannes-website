import React, { Component, Fragment } from 'react';
import classes from './Gallery.module.css';
import Modal from '../hoc/modal/Modal';

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
        const foundPic = this.props.homeJson.find(e => {
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
                    {this.props.homeJson.map(e => {
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