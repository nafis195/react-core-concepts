import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Nafis Chowdhury",
    job: "student",
    location:"Santa Ana"
  }

  var style = {
    color:'goldenrod',
    backgroundColor:'slateblue'
  }
  return (
    <div className="App">
      <header className="App-header">
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
          <h1 style={style}>{person.name + " " + person.job}</h1>
          <h3 style={{backgroundColor:'cyan', color:'yellow'}}>{person.location}</h3>
        <p>My First React Project</p>
        </a>
      </header>
    </div>
  );
}

export default App;
