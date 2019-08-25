import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            contacts:[{
                id:'',
                first_name:'',
                last_name:'',
                email:'',
                gender:'',
                phone:''
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
        .post("https://raw.githubusercontent.com/yusufhayirli/React-Learning/master/data-from-json/src/components/MOCK_CUSTOMERS.json", this.state)
        .then(Response => {
            console.log(Response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { id, first_name, last_name, email, gender, phone } = this.state
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
                        name="first_name" 
                        value={first_name} 
                        onChange={this.changeHandler}
                        placeholder={"Enter first name"}
                        />
                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="last_name" 
                        value={last_name} 
                        onChange={this.changeHandler}
                        placeholder={"Enter last name"}
                        />
                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={this.changeHandler}
                        placeholder={"Enter E-mail"}
                        />
                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="gender" 
                        value={gender} 
                        onChange={this.changeHandler}
                        placeholder={"Enter gender"}
                        />
                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="phone" 
                        value={phone} 
                        onChange={this.changeHandler}
                        placeholder={"Enter phone"}
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