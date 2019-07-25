import React from 'react';

class NewsForm extends React.Component{
    addButton(){
        console.log(this);
        this.props.addNews();
    }
    render(){
        return(
            <div>
                <button onClick={this.addButton.bind(this)}>Add</button>
            </div>
        )
    }
}

export default NewsForm;