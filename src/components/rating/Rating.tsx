import React, { useState } from "react";

import classes from './rating.module.css';

type StarPropsType = {
    isChecked: boolean,
    num: number,
};

// type UseStaeType = Array<StarPropsType>;

type RatingPropsType = {
    startRaiting: 0 | 1 | 2 | 3 | 4 | 5,
};

function  Rating(props: RatingPropsType) {
    let prevStarsArr: Array<Object> = [];
    let i = 0;

    for (i; i < props.startRaiting; i++) {
        prevStarsArr.push(<Star isChecked={true} key={i} num={i}/>)
    };

    for (i; i < 5; i++) {
        prevStarsArr.push(<Star isChecked={false} key={i} num={i}/>)
    };

    const [starsArr, setRating] = useState<any[]>(prevStarsArr);

    //Пофиксить any
    function onClickHandler(e: any) {
        // Решение так себе но пока так 
        //по тому что работает)))
        const i = Number(e.target.dataset.num) + 1;

        let j = 0

        if (isNaN(i)) return;

        prevStarsArr = [];

        for (j; j < i; j++) {
            prevStarsArr.push(<Star isChecked key={j} num={j}/>)
        };
    
        for (j; j < 5; j++) {
            prevStarsArr.push(<Star isChecked={false} key={j} num={j}/>)
        };

        setRating(prevStarsArr);
    };

    return (
      <div  
        className={classes.starWrap}
        onClick={(e) => onClickHandler(e)}>
        {starsArr}
      </div>
    );
};
  
function Star(props: StarPropsType) {
    return (
        <div 
            className={`${classes.star} ${props.isChecked ? classes.lightStar : classes.darkStar}`}
            data-num={props.num}>
        </div>
    );
};

export default Rating;