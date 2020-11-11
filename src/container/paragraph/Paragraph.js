import React from 'react';
import classes from './Paragraph.module.css';

const Paragraph = (props) => {

    const para = props.elementParagraph;

    const paraArr = para.split(' '); //props.here...
    const splitArr = [];
    let i, temp, chunk = 14; 
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
        </div>
    );
}

export default Paragraph;
