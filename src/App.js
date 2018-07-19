import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Card.css';
import Footer from './Footer.js';
import Name from './Name';
// import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage'
import { Fullpage, Slide } from 'fullpage-react';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide><Name /></Slide>,
  <Slide> <Footer /></Slide>
];
fullPageOptions.slides = slides;

      // <Fullpage {...fullPageOptions} />
class App extends Component {
  render() {
    return (
      <div>
        <Name />
        <Footer/>
      </div>
    );
  }
}

export default App;
