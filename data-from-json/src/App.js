import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomersList from './components/CustomersList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CustomersList/>
      </div>
  )};
}

export default App;
