import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //Type 1 State usage
  constructor(props){
    super(props);
    this.state = {
      name: "Yusuf"
    }
  // Type 2 State Usage (More efficient)
  }
  state = {
    name: "Yusuf"
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {this.state.name}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
