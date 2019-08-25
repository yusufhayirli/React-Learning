import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            users:[{
                id:'',
                name:'',
                username:'',
                email:'',
                address:''
            }]
        }
    }

    changeHandler = (e) => {
        this.setState({
            //it helps to update default state values as entered value in input place
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post("https://jsonplaceholder.typicode.com/users", this.state)
        .then(Response => {
            console.log(Response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { id, name, username, email, address } = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <input 
                        type="text"
                        name="id" 
                        value={id}
                        onChange={this.changeHandler}
                        placeholder={"Enter id"}
                        />
                    </div>
                    <div>
                        <input 
                        type="text"
                        name="name" 
                        value={name}
                        onChange={this.changeHandler}
                        placeholder={"Enter name"}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <br></br>
                </form>
            </div>
        );
    }
}

export default PostForm;