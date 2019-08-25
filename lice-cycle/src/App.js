import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component {
  constructor(props){
    super();
    console.log("constructor works!");

    this.state = {
      name: "Kenan"
    }
  }
  componentWillMount() {
    console.log("componentWillMount works!")
  }

  componentDidMount() {
    console.log("componentDidMount works!")

    setTimeout(() => {
      this.setState({
        name:"Osman"
      })
    }, 2000)
  }
  
  changeName = () => {
    this.setState({
      name:"Mahmut"
    })
  }

  state = {
    tl: 0
  }

  changeTl = (e) => {
    this.setState({
      tl: e.target.value
    })
  }
// Update, if only if necessary
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("shouldComponentUpdate", nextProps, nextState)
    return (nextState.tl % 10) === 0;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate!", nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps,prevState)
  }
  
  
  render(){
    console.log("render works!")
    return (
      <div className="App">
        <input name="tl" id="tl" onChange={this.changeTl}/>
          <br/>
          Her elma 10 TL
          <br/>
          {this.state.tl / 10} tane elma alabilirsin.
      </div>
  )};
}

export default App;
