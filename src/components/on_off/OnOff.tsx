import React, { useState } from "react";

import classes from './on_off.module.css';

type OnOffPropsType = {
    on: boolean,
};

function OnOff(props: OnOffPropsType) {
    const [on, switchOnOff] = useState(props.on);

    const onClickHandler = (value: boolean) => {
        switchOnOff(value);
    };

    return (
        <div className={classes.onOffWrap}>
            <button
                className={classes.on}
                onClick={() => onClickHandler(true)}>
                ON
            </button>

            <button 
                className={classes.off}
                onClick={() => onClickHandler(false)}>
                OFF
            </button>

            <div
                className={`${classes.lamp} ${on ? classes.lampOn : classes.lampOff}`}>
            </div>
        </div>
    );
};

export default OnOff;