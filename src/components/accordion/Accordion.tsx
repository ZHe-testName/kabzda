import React from "react";

import classes from './accordion.module.css';

type AccordionPropsType = {
    title: string,
    itemsNum?: number,
};

type AccordionTitlePropsType = {
    title: string,
};

type AccordionBodyPropsType = {
    itemsNums: number,
};

function Accordion(props: AccordionPropsType) {
    const {title, itemsNum = 0} = props;

    return (
        <div className={classes.accordeon}>
            <AccordionTitle title={title}/>

            <AccordionBody itemsNums={itemsNum}/>
        </div>
    );
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
};
  
  function  AccordionBody(props: AccordionBodyPropsType) {
    const liArr = [];

    while (liArr.length < props.itemsNums) {
        liArr.push(<li>{liArr.length + 1}</li>)
    };

    return (
      <ul>
        {liArr}
      </ul>
    );
};

export default Accordion;