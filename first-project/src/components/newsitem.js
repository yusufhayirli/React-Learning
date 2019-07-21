import React from 'react';
import "../newsitem.css";

class NewsItem extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h1 className="title">{this.props.title}</h1>
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default NewsItem;