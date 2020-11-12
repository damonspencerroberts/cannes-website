import React, { Component, Fragment } from 'react';
import classes from './Gallery.module.css';
import Modal from '../hoc/modal/Modal';

export default class Gallery extends Component {
    constructor() {
        super()


        this.state = {
            eachPhoto: false,
            individualPic: null,
            individualKey: null
        }

        this.handleBackgroundPic = this.handleBackgroundPic.bind(this);
        this.handleLargeImage = this.handleLargeImage.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleLeftClick = this.handleLeftClick.bind(this);
    }

    handleLargeImage(identifier) {
        console.log(identifier);
        const foundPic = this.props.homeJson.find(e => {
            return e.key === identifier;
        });


        this.setState({eachPhoto: true, individualPic: foundPic.source, individualKey: identifier});

    }

    handleBackgroundPic() {
        this.setState({eachPhoto: !this.state.eachPhoto});
    }

    handleRightClick(identifier) {
        let pic = identifier += 1;
        console.log(pic);
        if (pic >= 0 && pic <= this.props.homeJson.length - 1) {
            this.handleLargeImage(pic);
        } else {
            pic = 0;
            this.handleLargeImage(pic);
        }
    }

    handleLeftClick(identifier) {
        let pic = identifier -= 1;
        console.log(pic);
        if (pic >= 0 && pic <= this.props.homeJson.length - 1) {
            this.handleLargeImage(pic);
        } else {
            pic = this.props.homeJson.length - 1;
            this.handleLargeImage(pic);
        }
    }

    render() {
        const pic = this.state.eachPhoto;
        
        return(
            <Fragment>
                {this.props.header ? <div className = {classes.Header}>
                    <h1>{this.props.headerContent}</h1>
                </div>: null }
                {pic ? 
                    <Modal 
                        clicked = {this.handleBackgroundPic}
                        rightClick = {() => this.handleRightClick(this.state.individualKey)}
                        leftClick = {() => this.handleLeftClick(this.state.individualKey)}
                    >
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