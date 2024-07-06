import logo from './logo.svg';
import './App.css';
import { useAnyKeyToRender } from './useAnyKeyToRender';
import React, { useEffect } from "react";

function App() {
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
          Learn React
        </a>
      </header>
      <WordCount>You are not going to believe this but...</WordCount>;
    </div>
    
  );
}

function WordCount({ child = "" }) {
  useAnyKeyToRender();
  const words = child.split(" ");
  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  
  return (
    <>
    <p>{child}</p>
    <p>
    <strong>{words.length} - words</strong>
    </p>
    </>
  );
  }

export default App;
