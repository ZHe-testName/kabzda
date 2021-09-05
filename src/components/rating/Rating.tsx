import React from "react";

import classes from './rating.module.css';

type StarPropsType = {
    isChecked: boolean,
};

type RatingPropsType = {
    starsNum: 0 | 1 | 2 | 3 | 4 | 5,
};

function  Rating(props: RatingPropsType) {
    const {starsNum} = props;

    const starsArr = [];

    for (let i = 0; i < starsNum; i++) {
        starsArr.push(<Star isChecked/>)
    };

    for (let i = 0; i < (5 - starsNum); i++) {
        starsArr.push(<Star isChecked={false}/>)
    };

    return (
      <div className={classes.starWrap}>
        {starsArr}
      </div>
    );
};
  
function Star(props: StarPropsType) {
    return (<div className={`${classes.star} ${props.isChecked ? classes.lightStar : classes.darkStar}`}>

    </div>);
};

export default Rating;