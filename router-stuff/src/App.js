import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import News from './components/News';
import Profile from './components/Profile';
import Error from './components/Error';

class App extends Component {
  state ={
    loggedIn: false
  }

  onClickButton = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
  render() {
    return (
			<Router>
        <div>
          <NavLink activeStyle={{color:"red"}} exact to="/">Home Page</NavLink>
          <br></br>
          <NavLink activeStyle={{color:"red"}} exact to="/contact">Contact</NavLink>
          <br></br>
          <NavLink activeStyle={{color:"red"}} exact to="/news/2">News 2</NavLink>
          <br></br>
          <NavLink activeStyle={{color:"red"}} exact to="/profile">Profile</NavLink>

          <input 
          type="button" 
          onClick={this.onClickButton} 
          value={this.state.loggedIn ? "Log out" : "Log in"}
          />

          <Switch>
            <Route path="/" exact render={
              () => {
                return(<h1>Home page</h1>)
              }
            } />

            <Route path="/contact" exact render={
              () => {
                return(<h1>Contact page</h1>)
              }
            } />

            <Route path="/news/:id" exact component={News} />

            <Route path="/profile" exact render={ () => (
              this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)
              )}/>

            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;