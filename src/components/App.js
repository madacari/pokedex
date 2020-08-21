import React from 'react';
import logo from './logo.svg';
import Pokemon from './Pokemon';
import './App.css';

class App extends React.Component {
  render() {

    const pokemonIds = Array.from(Array(9), (_, i) => i + 1)
    return (
      <div className="App">
        <header className="App-header">
          {pokemonIds.map((pokemonId) => <Pokemon idPokemon={pokemonId}/>)}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
