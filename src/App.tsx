import React, { useState } from 'react';
import classes from './App.module.css';
import Accordion from './components/accordion/Accordion';
import OnOff from './components/on_off/OnOff';
import PageTitle from './components/page_title/PageTitle';
import Rating from './components/rating/Rating';

function App() {
  const [on, switchOnOff] = useState(false);

  const onOffClickHandler = (value: boolean) => {
      switchOnOff(value);
  };

  return (
    <div className={classes.app}>
      <PageTitle title='Main Page Title'/>

      <Rating startRaiting={3}/>

      <Accordion 
              title='First Accordion'
              itemsNum={6}/>

      <Accordion 
              title='Second Accordion'
              itemsNum={4}/>
              
      <OnOff 
        isOn={on}
        onClick={onOffClickHandler}/>
    </div>
  );
};

export default App;
