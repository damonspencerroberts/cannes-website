/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import classes from './Paragraph.module.css';

class Paragraph extends Component {
    
    render() {

        return(
            <div className={classes.Paragraph}>
                <h1>{this.props.header}</h1>
                    <p>{this.props.elementParagraph1}</p>
                    <p>{this.props.elementParagraph2}</p>
                    <p>{this.props.elementParagraph3}</p>
                    {this.props.p4 ? <p>{this.props.elementParagraph4}</p> : null }
                    {this.props.p5 ? <p>{this.props.elementParagraph5}</p> : null }
                    {this.props.p6 ? <p>{this.props.elementParagraph6}</p> : null }
                <br />
                {this.props.links ? <div className = {classes.LinksDiv}>
                    <p>{this.props.linkPara}</p>
                    <br />
                    <span>
                        <a style = {{fontWeight: "bolder"}} href = {this.props.link1} target = "_blank" rel="noreferrer"><i className="fab fa-airbnb"></i> {this.props.link1Words}</a> | 
                        <a style = {{fontWeight: "bolder"}} href = {this.props.link2} target = "_blank" rel="noreferrer"><i class="fas fa-globe-europe"></i> {this.props.link2Words}</a> | 
                        <a style = {{fontWeight: "bolder"}} href = "#form-of-contact"><i className="fas fa-envelope"></i> Find out more</a>
                    </span>
                </div> : null }
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
