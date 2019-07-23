import React from 'react';
import propTypes from 'prop-types';
import NewsItem from './newsitem';

class news extends React.Component{
    static propTypes = {
        news: propTypes.array,
        name: propTypes.string
    };
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

export default news;