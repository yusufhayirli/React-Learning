import React, { Component } from 'react';
import axios from 'axios';

class UsersList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            users:[]
        }
    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
            console.log(Response)
            this.setState({users:Response.data})
            })
            .catch(error => {
            console.log(error)
            this.setState({errorMsg: "Error retreiving data !"})
            })
        }

    removePost(id){
        this.setState(state=>({posts: state.posts.filter(post=> post.id !== id)})
        );}

    clearAll(){
        this.setState({
            users:[]
        })
    }

    render() {
        const {users , errorMsg, e} = this.state
        return (
            <div>
                Post List Here.
                <button onClick={this.clearAll}>Clear All</button>
                <hr></hr>
                {users.map(user =>
                <div key={user.id}>
                    <button onClick={this.clearAll}>Remove state</button>
                    User ID : {user.id}
                    <br></br>
                    First Name : {user.name}
                    <br></br>
                    <hr></hr>
                </div>) }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default UsersList;