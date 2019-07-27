import React from 'react';
import PostData from './MOCK_CUSTOMERS.json';

class CustomersList extends React.Component {
    render() {
        return (
            <div>
                Here is customers' info:
                <hr/>
                {PostData.map((CustomersDetails,index) => {
                    return <div>
                        <p>{"Customer's ID: " + CustomersDetails.id}</p>
                        <p>{"First Name: " + CustomersDetails.first_name}</p>
                        <p>{"Last Name: " + CustomersDetails.last_name}</p>
                        <p>{"Email: " + CustomersDetails.email}</p>
                        <p>{"Gender: " + CustomersDetails.gender}</p>
                        <p>{"Phone: " + CustomersDetails.phone}</p>
                        <hr/>
                    </div>
                })}
            </div>
        );
    }
}

export default CustomersList;