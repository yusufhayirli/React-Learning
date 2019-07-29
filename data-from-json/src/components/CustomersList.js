import React from 'react';
import PostData from './MOCK_CUSTOMERS.json';
import propTypes from 'prop-types';
import './CustomersList.css';

class CustomersList extends React.Component {
    render() {
        return (
            <div>
                {PostData.map((CustomersDetails) => {
                return (
                <div className="data">
                    <hr/>
                    <p>{"Customer's ID: " + CustomersDetails.id}</p>
                    <p>{"First Name: " + CustomersDetails.first_name}</p>
                    <p>{"Last Name: " + CustomersDetails.last_name}</p>
                    <p>{"Email: " + CustomersDetails.email}</p>
                    <p>{"Gender: " + CustomersDetails.gender}</p>
                    <p>{"Phone: " + CustomersDetails.phone}</p>
                    <hr/>
                    <br/>
                </div>
                )})}
            </div>
        );
    }
}

export default CustomersList;