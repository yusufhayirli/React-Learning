import React from 'react';
import propTypes from 'prop-types';
import "../newsitem.css";

class NewsItem extends React.Component {
    constructor(props){
        super();
        console.log(props);
    }

    render(){
        const {title,description} = this.props.newsData;
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

NewsItem.propTypes = {
    newsData: propTypes.shape({
        title: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
    }).isRequired
}

export default NewsItem;