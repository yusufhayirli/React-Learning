import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostList/>
      </div>
    );
  }
}


export default App;
