import React from "react";

import classes from './on_off.module.css';

export type OnOffPropsType = {
    isOn: boolean,
    onClick: (value: boolean) => void,
};

function OnOff(props: OnOffPropsType) {
    const {isOn, onClick} = props;

    return (
        <div className={classes.onOffWrap}>
            <button
                className={classes.on}
                onClick={() => onClick(true)}>
                ON
            </button>

            <button 
                className={classes.off}
                onClick={() => onClick(false)}>
                OFF
            </button>

            <div
                className={`${classes.lamp} ${isOn ? classes.lampOn : classes.lampOff}`}>
            </div>
        </div>
    );
};

export default OnOff;