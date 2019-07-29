import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Contacts/>
      </div>
    );
  }
}

export default App;
