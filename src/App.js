import React, { Component } from 'react';
import './App.css';
import SlideBars from "./components/SlideBars";
import { ImagesProvider } from './context/imagesContext'


class App extends Component {
  
  render() {
    return (
      <ImagesProvider>
        <SlideBars />
      </ImagesProvider>
        
      )
  }
}

export default App;
