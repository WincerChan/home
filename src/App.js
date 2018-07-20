import React, { Component } from 'react';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import './Card.css';
import Name from './Name';
import About from './About'
import { FullPage, Slide } from 'react-full-page';
import "babel-polyfill"

let options = {
  duration: 888
}

class App extends Component {
  render() {
    return (
      <FullPage {...options} >
        <Slide>
          <Name />
        </Slide>
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage >
    );
  }
}


export default App;
