import React from 'react';

class NewsForm extends React.Component{
    myButton(){
        console.log("Button works!")
    }
    render(){
        return(
            <div>
                <button onClick={this.myButton}>Add</button>
            </div>
        )
    }
}

export default NewsForm;