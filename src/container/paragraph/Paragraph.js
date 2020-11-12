/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import classes from './Paragraph.module.css';

const Paragraph = (props) => {

    const para = props.elementParagraph;

    const paraArr = para.split(' '); //props.here...
    const splitArr = [];
    let i, temp, chunk = props.chunk; 
    for (i = 0; i < paraArr.length; i+=chunk) {
        temp = paraArr.slice(i, i+chunk);
        splitArr.push(temp);
    }

    const newSplit = splitArr.map(e => {
        return e.join(' ');
    });

    return (
        <div className={classes.Paragraph}>
            {newSplit.map(e => {
                return <p key={e}>{e}</p>
            })}
            <br />
            {props.links ? <div className = {classes.LinksDiv}>
                <p>{props.linkPara}</p>
                <br />
                <span>
                    <a style = {{fontWeight: "bolder"}} href = {props.link1} target = "_blank" rel="noreferrer"><i className="fab fa-airbnb"></i> {props.link1Words}</a> | 
                    <a style = {{fontWeight: "bolder"}} href = {props.link2} target = "_blank" rel="noreferrer"><i class="fas fa-globe-europe"></i> {props.link2Words}</a> | 
                    <a style = {{fontWeight: "bolder"}} href = "#form-of-contact"><i className="fas fa-envelope"></i> Find out more</a>
                </span>
            </div> : null }
            {props.findLink ? 
                <div className = {classes.LinksDiv}>
                    <span>
                        <a style = {{fontWeight: "bolder"}} href = "#form-of-contact"><i className="fas fa-envelope"></i> Find out more</a>
                    </span>
                </div> : null}
        </div>
    );
}

export default Paragraph;

/*<i className="fab fa-airbnb"></i>
<i className="fas fa-envelope"></i> 
<i className="far fa-copyright"></i>
*/
