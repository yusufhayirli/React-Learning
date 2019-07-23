import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './news';

function App() {
  const news = [{
    id: 1,
    title: "title 1",
    description: "desc 1"
  },
  {
    id: 2,
    title: "title 2",
    description: "desc 2"
  },
  {
    id:3,
    title: "title 3",
    description: "desc 3"
  }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <News news={news} name="Yusuf"/>
      </header>
    </div>
  );
}

export default App;
