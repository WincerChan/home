import React, { Component } from 'react';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import './Card.css';
import Name from './Name';
import About from './About'
import { Scroller, Section } from 'react-fully-scrolled';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  transDuration: 1,
  swipeSensitivity: 80,
};

class App extends Component {
  componentDidMount() {
    document.ontouchmove = function (ev) {
      ev.preventDefault();
    }
  }
  render() {
    return (
      <Scroller {...fullPageOptions}>
        <Section> <Name /></Section>
        <Section> <About /></Section>
        <Section> <Footer /></Section>
      </Scroller>
    );
  }
}


export default App;
