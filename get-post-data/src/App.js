import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UsersList from './components/UsersList';
import UsersPost from './components/UsersPost';
import StackList from './components/StackList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StackList/>
        <PostList/>
      </div>
    );
  }
}


export default App;
