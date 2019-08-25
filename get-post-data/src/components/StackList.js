import React, { Component } from 'react';
import axios from 'axios';

class StackList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {
            console.log(Response)
            this.setState({posts:Response.data})
            })
            .catch(error => {
            console.log(error)
            this.setState({errorMsg: "Error retreiving data !"})
            })
        }

    clearAll(){
        this.setState({
            posts: []
        })
        }
        
    removePost(postId){
    this.setState(state=>({posts: state.posts.filter(post=> post.id !== postId)})
    );}

    render() {
        const {posts , errorMsg} = this.state
        return (
            <div>
                Post List Here.
                {
                    posts.length ?
                    posts.map(post => 
                    <div key={post.id}>
                        <div>
                        {post.title}
                        </div>
                        <button type="button" onClick={()=>this.removePost(post.id)}>Remove Post</button>
                    </div>
                        ) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
                <button type="button" onClick={()=>this.clearAll()}>Remove All Posts</button>
            </div>
        );
    }
}

export default StackList;