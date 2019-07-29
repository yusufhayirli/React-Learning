import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
      </div>
    );
  }
}


export default App;
