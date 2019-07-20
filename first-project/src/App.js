import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsItem from './newsitem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewsItem/>
      </header>
    </div>
  );
}

export default App;
