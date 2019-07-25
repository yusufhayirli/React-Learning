import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './News';

const news = [{
  id: 1,
  title: "title 1",
  description: "desc 1"
},
{
  id: 2,
  title: "title 2",
  description: "desc 2"
},
{
  id:3,
  title: "title 3",
  description: "desc 3"
}];

class App extends React.Component {
  addNews(){
    console.log('addNews worked!');
    news.push({
      id:4,
      title:"title 4",
      description: "desc 4"
    });
    console.log(news);
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <News news={news} name={"Yusuf"} addNews={this.addNews}/>
        </header>
      </div>
    );
  }
}

export default App;
