import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomersList from './components/CustomersList';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <CustomersList/>
      </div>
  )};
}

export default App;
