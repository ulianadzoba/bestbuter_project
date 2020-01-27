import React, { Component } from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import History from './components/History/History';
import Gallery from './components/Gallery/Gallery'
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';
import ClientContext from './components/ClientContext/ClientContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Header></Header>
        <About></About>
        <Services></Services>
        <History></History>
        <Gallery></Gallery>
        <ClientContext.Provider
          value={{
            state: this.state,
            changeText: (item) =>
              this.setState({ text: this.state.text + item + ' ' })
          }} >
          <Price />
        </ClientContext.Provider>
        <ClientContext.Provider value={{ state: this.state }}>
          <Contact />
        </ClientContext.Provider>
      </div>
    );
  }
}

export default App;

