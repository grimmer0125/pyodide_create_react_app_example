import { useRef, useEffect, useState, useCallback } from "react";

import logo from './logo.svg';
import './App.css';

async function test() {
  let pyodide_pkg = await import("pyodide/pyodide.js");

  let pyodide = await pyodide_pkg.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
  });
}

function App() {
  useEffect(() => {
    async function init() {
      await test()
    }
    init();

  }, []);

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
    </div>
  );
}

export default App;
