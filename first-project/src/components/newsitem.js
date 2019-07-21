import React from 'react';
import "../newsitem.css";

class NewsItem extends React.Component {
    render(){
        const {title,description} = this.props;
        return(
            <div>
                <h1 className="title">{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}

export default NewsItem;