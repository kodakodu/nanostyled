import React, { Component } from 'react';
import './App.css';
import nanostyled from 'nanostyled';
import 'tachyons/css/tachyons.css';

const Button = nanostyled('button',{
  color: 'white',
  bg: 'bg-blue',
  base: 'fw7 br3 pa2 sans-serif f4 bn input-reset'
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Base Button</Button>
        <Button bg='bg-yellow'>Yellow Button</Button>
      </div>
    );
  }
}

export default App;
