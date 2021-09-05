import React from 'react';
import classes from './App.module.css';
import Accordion from './components/accordion/Accordion';
import OnOff from './components/on_off/OnOff';
import PageTitle from './components/page_title/PageTitle';
import Rating from './components/rating/Rating';

function App() {
  return (
    <div className={classes.app}>
      <PageTitle title='Main Page Title'/>

      <Rating starsNum={4}/>

      <Accordion 
              title='First Accordion'
              collapsed
              itemsNum={6}/>

      <Accordion 
              title='Second Accordion'
              collapsed={false}
              itemsNum={4}/>

      <OnOff on={false}/>
    </div>
  );
};

export default App;
