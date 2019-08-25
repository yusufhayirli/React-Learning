import React from 'react';
import './App.css';
import GetUsers from './components/GetUsers';
import PostUsers from './components/PostUsers';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <Header>
            <b><div className="headergetpost"> Post Users </div></b>
          </Header>
          <br/>
            <Content>
              <PostUsers/>
            </Content>
          <br/>
          <Header>
            <b><div className="headergetpost"> Get and Remove Users </div></b>
          </Header>
            <Content>
              <GetUsers/>
            </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
  )};
}

export default App;
