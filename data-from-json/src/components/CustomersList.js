import React from 'react';
import PostData from './MOCK_CUSTOMERS.json';
import propTypes from 'prop-types';
import './CustomersList.css';

class CustomersList extends React.Component {
    static propTypes = {
        id: propTypes.number,
        first_name: propTypes.string,
        last_name: propTypes.string,
        email: propTypes.string,
        gender: propTypes.string,
        phone: propTypes.string
    }

    state = {
        id:"",
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        phone:""
    }
    
    render() {
        return (
            <div>
                {PostData.map((CustomersDetails,index) => {
                return (
                <div className="data">
                    <p>{"Customer's ID: " + CustomersDetails.id}</p>
                    <p>{"First Name: " + CustomersDetails.first_name}</p>
                    <p>{"Last Name: " + CustomersDetails.last_name}</p>
                    <p>{"Email: " + CustomersDetails.email}</p>
                    <p>{"Gender: " + CustomersDetails.gender}</p>
                    <p>{"Phone: " + CustomersDetails.phone}</p>
                    <hr/>
                </div>
                )})}
            </div>
        );
    }
}

export default CustomersList;