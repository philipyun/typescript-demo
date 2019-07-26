import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import ButtonHooks from './components/ButtonHooks';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button onClick={() => alert("typescript is cool")} buttonText="This is a cool TS button" color="red" />
        <ButtonHooks onClick={() => alert("typescript + hooks is cool")} buttonText={"this is a hooks button"} />
      </header>
    </div>
  );
}

export default App;
