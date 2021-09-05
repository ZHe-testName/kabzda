import React from 'react';
import classes from './App.module.css';
import Accordion from './components/accordion/Accordion';
import PageTitle from './components/page_title/PageTitle';
import Rating from './components/rating/Rating';

function App() {
  return (
    <div className={classes.app}>
      <PageTitle title='Main Page Title'/>

      <Rating starsNum={4}/>

      <Accordion 
              title='First Accordion'
              itemsNum={6}/>
    </div>
  );
};

export default App;
