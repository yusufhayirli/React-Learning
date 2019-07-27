import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Contacts/>
        </header>
      </div>
    );
  }
}

export default App;
