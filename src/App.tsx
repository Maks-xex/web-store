import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-bold text-red-500">Learn React</p>
        </a>
      </header>
    </div>
  );
}

export default App;
