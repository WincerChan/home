import React, { Component } from 'react';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import Contact from './Contact';
import './Card.css';
import Name from './Name';
import About from './About'
import ReactFullpage from '@fullpage/react-fullpage'

class App extends Component {
  render() {
    return (
      <div>
        <Contact />
        <ReactFullpage
          scrollingSpeed={1000}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Name />
                <About />
                <Footer />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    );
  }
}


export default App;
