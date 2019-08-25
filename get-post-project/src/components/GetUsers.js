import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';

class GetUsers extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            content:[]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
            console.log(Response)
            this.setState({content:Response.data})
            })
            .catch(error => {
            console.log(error)
            this.setState({errorMsg: "Error retreiving data !"})
            })
        }

    clearAll(){
        this.setState({
            content: []
        })
    }
        
    removePost(elementId){
    this.setState(state=>({content: state.content.filter(element=> element.id !== elementId)})
    );}

    render() {
        const {content , errorMsg} = this.state
        return (
            <div>
                <br></br>
                <Button type="danger" onClick={()=>this.clearAll()}>Remove All Users</Button>
                {
                    content.length ?
                    content.map(element => 
                    <div key={element.id}>
                        <hr></hr>
                        <div>
                        <b>User's ID: {element.id}</b>
                        <br></br>
                        Name: {element.name}
                        <br></br>
                        Username: {element.username}
                        <br></br>
                        Email: {element.email}
                        <br></br>
                        Phone: {element.phone}
                        <br></br>
                        </div>
                        <Button type="primary" onClick={()=>this.removePost(element.id)}>Remove User</Button>
                    </div>
                        ) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
                <hr></hr>
            </div>
        );
    }
}

export default GetUsers;