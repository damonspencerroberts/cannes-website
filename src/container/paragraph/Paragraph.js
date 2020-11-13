/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import classes from './Paragraph.module.css';

class Paragraph extends Component {
    
    render() {

        return(
            <div className={classes.Paragraph}>
                <h1>{this.props.header}</h1>
                    {this.props.paragraphArray.map(e => {
                        return <p key={e}>{e}</p>
                    })}
                <br />
                {this.props.links ? <div className = {classes.LinksDiv}>
                    <span>
                        <a style = {{fontWeight: "bolder"}} href = "https://www.airbnb.co.uk/rooms/18335152?preview_for_ml=true&source_impression_id=p3_1604864045_Y1CIl0v%2Feg1r%2Folm" target = "_blank" rel="noreferrer"><i className="fab fa-airbnb"></i> Book with Airbnb</a> | 
                        <a style = {{fontWeight: "bolder"}} href = "https://www.domainedebeaucour.com" target = "_blank" rel="noreferrer"><i className="fas fa-globe-europe"></i> Explore France</a> | 
                        <a style = {{fontWeight: "bolder"}} href = "#form-of-contact"><i className="fas fa-envelope"></i> Find out more</a>
                    </span>
                </div> : null }
                {this.props.table ? 
                    <div className = {classes.Table}>
                        <p>Included in the apartment</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Heating</td>
                                    <td>Air conditioning in main bedroom</td>
                                </tr>
                                <tr>
                                    <td>Fibre optic internet</td>
                                    <td>Flat screen tv with English channels</td>
                                </tr>
                                <tr>
                                    <td>Nespresso machine</td>
                                    <td>Dishwasher</td>
                                </tr>
                                <tr>
                                    <td>Washing Machine</td>
                                    <td>All linen including towels</td>
                                </tr>
                                <tr>
                                    <td>Fully equipped kitchen</td>
                                    <td>Balcony with sea views</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>: null}
                {this.props.findLink ? 
                    <div className = {classes.LinksDiv}>
                        <span>
                            <a style = {{fontWeight: "bolder"}} href = "#form-of-contact"><i className="fas fa-envelope"></i> Find out more</a>
                        </span>
                    </div> : null}
            </div>
        );
    }
}


export default Paragraph;



/*<i className="fab fa-airbnb"></i>
<i className="fas fa-envelope"></i> 
<i className="far fa-copyright"></i>
*/

/**
 * Props:
 * header
 * paragraphArray
 * links (contact)
 * linkPara (contact)
 * link1 (contact)
 * link2 (contact)
 * findLink
 */