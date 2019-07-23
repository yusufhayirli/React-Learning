import React from 'react';
import propTypes from 'prop-types';
import NewsItem from './newsitem';

class news extends React.Component{
    
    render(){
        const element = this.props.news.map(news => <NewsItem 
            key={news.id}
            title = {news.title}
            description = {news.description} />);
        return(
            <div>
                {this.props.name}
                {element}
            </div>
        )
    }
}

news.propTypes = {
    news: propTypes.array.isRequired,
    name: propTypes.oneOfType
    //we can make it possible to put 2 different type of prop by using "oneofType"
    ([
        propTypes.number,
        propTypes.string
    ])
    //if we define wrong these types, console will give us an error.
}

export default news;