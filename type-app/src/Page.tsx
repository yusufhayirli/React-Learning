import React, { Component } from 'react';

class Page extends Component {

    state = {
        name:"Osman"
    }
    
    componentWillMount() {
        console.log("will mount")
        this.setState({
            name:"Ahmet"
        })
        console.log(this.props)
    }

    componentDidMount() {
        console.log("did mount")
        this.setState({
            name:"Veli"
        })
        console.log(this.props)
    }

    render() {
        console.log("render works")
        console.log(this.props)
        return (
            <div>

                {this.state.name}
            </div>
        );
    }
}

export default Page;