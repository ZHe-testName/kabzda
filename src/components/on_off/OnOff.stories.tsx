import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { action }from '@storybook/addon-actions';
import OnOff from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callBack = action('OnOff is turned');

export const OnOffIsOn = () => <OnOff isOn={true} onClick={callBack}/>;
export const OnOffIsOff = () => <OnOff isOn={false} onClick={callBack}/>;
export const TurnOnOff = () => {
    const [isOn, turnOnOff] = useState(false);

    return <OnOff isOn={isOn} onClick={turnOnOff}/>;
};