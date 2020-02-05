import React from 'react';
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


export default function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Header></Header>
      <About></About>
      <Services></Services>
      <History></History>
      <Gallery></Gallery>
      <Price />
      <Contact />
    </div>
  );
}




