import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => users.data)
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
    }, 500)
    
  }

  render(){
    const { isLoading } = this.state;
    return (
      <div className="App">
        <h1>Users</h1>
        { isLoading ? 'Loading...' : ''}
        {this.state.users.map(user =>
        <div key={user.id} className="usercss">
          {user.name} - @{user.username}
        </div>
          )}
      </div>
  )};
}

export default App;
