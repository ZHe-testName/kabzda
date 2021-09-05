import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <div>
        My React kabzda project
      </div>

      <Rating/>

      <Accordion/>
    </div>
  );
};

function  Rating() {
  console.log(<Star/>);
  return (
    <div className={classes.starWrap}>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  );
};

function Accordion() {
  return (
    <div className={classes.accordeon}>
      <h3>Accordion</h3>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

function Star() {
  return (<div className={classes.star}>

  </div>);
};

export default App;
