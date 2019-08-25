import React, { PureComponent } from 'react';

class Child extends PureComponent {
    constructor(props){
        super(props);
        console.log("Child contructor")
    }
    
    componentWillMount() {
        console.log("Child WillMount")
    }
    componentDidMount() {
        console.log("Child DidMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("Child WillReceiveProps", nextProps)
    }

    render() {
        return (
            <div>
                Child
            </div>
        );
    }
}
export default Child;