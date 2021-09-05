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

    let i = 0

    for (i; i < starsNum; i++) {
        starsArr.push(<Star isChecked key={i}/>)
    };

    for (i; i < 5; i++) {
        starsArr.push(<Star isChecked={false} key={i}/>)
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