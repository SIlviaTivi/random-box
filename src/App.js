import React, { Component } from 'react';
import './App.css';

const randomColor = () => {
  let letters = '0123456789';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

const randomNumber = () => {
  return Math.floor((Math.random() * 5) + 1) + 'vw';
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Reto</h1>
        </header>
        <div className="App-box" style={{backgroundColor: randomColor()}}>
          <p className="App-box-text" style={{fontSize: randomNumber()}}>
            Random Box
          </p>
        </div>
      </div>
    );
  }
}

export default App;