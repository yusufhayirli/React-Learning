import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/yusufhayirli/React-Learning/master/data-from-json/src/components/MOCK_CUSTOMERS.json')
            .then(Response => {
            console.log(Response)
            this.setState({posts:Response.data})
            })
            .catch(error => {
            console.log(error)
            this.setState({errorMsg: "Error retreiving data !"})
            })
        }

    removePost(id){
        this.setState(state=>({posts: state.posts.filter(post=> post.id !== id)})
        );}
        
    render() {
        const {posts , errorMsg, e} = this.state
        return (
            <div>
                Post List Here.
                <br></br>
                
                <hr></hr>
                {posts.map(post =>
                <div key={post.id}>
                    User ID : {post.id}
                    <br></br>
                    First Name : {post.first_name}
                    <br></br>
                    Last Name : {post.last_name}
                    <br></br>
                    Email : {post.email}
                    <br></br>
                    Gender : {post.gender}
                    <br></br>
                    Phone : {post.phone}
                    <br></br>
                    <hr></hr>
                </div>) }:
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default PostList;