import React, { Component } from 'react';
import classes from './Gallery.module.css';
import HomeJson from '../../components/images-gallery/Home-gallery-json';

export default class Gallery extends Component {
    render() {
        return(
            <div className={classes.Gallery}>
                {HomeJson.map(e => {
                    return (
                        <div className={classes.Links} key = {e.key}> 
                            <img src={e.source} alt={e.key} className={classes.Images} />
                        </div>
                    );
                })}
            </div>
        );
    }
}