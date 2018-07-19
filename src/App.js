import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Card.css';
import Footer from './Footer';
import Name from './Name';
import About from './About'
import { Fullpage, Slide } from 'fullpage-react';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 0,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 0,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide><Name /></Slide>,
  <Slide> <About /></Slide>,
  <Slide> <Footer /></Slide>
];
fullPageOptions.slides = slides;

class App extends Component {
  render() {
    return (
      <Fullpage {...fullPageOptions} />
    );
  }
}

export default App;
