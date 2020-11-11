import React, { Component, Fragment } from 'react';
import classes from './Gallery.module.css';
import HomeJson from '../../components/images-gallery/Home-gallery-json';
import Background from '../hoc/background/Background';

export default class Gallery extends Component {
    constructor() {
        super()


        this.state = {
            eachPhoto: false
        }

        this.handleBackgroundPic = this.handleBackgroundPic.bind(this);
    }

    handleBackgroundPic() {
        this.setState({eachPhoto: !this.state.eachPhoto})
    }

    render() {
        const pic = this.state.eachPhoto;
        
        return(
            <Fragment>
                {pic ? <Background clicked = {this.handleBackgroundPic} /> : null}
                <div className={classes.Gallery}>
                    {HomeJson.map(e => {
                        return (
                            <div className={classes.Links} key = {e.key} onClick = {this.handleBackgroundPic}> 
                                <img src={e.source} alt={e.key} className={classes.Images} />
                            </div>
                        );
                    })}
                </div>
            </Fragment>
        );
    }
}