import React from 'react';
import NewsItem from './newsitem';

class news extends React.Component{
    render(){
        const element = this.props.news.map(news => <NewsItem 
            key={news.id}
            title = {news.title}
            description = {news.description} />);
        return(
            <div>
                {element}
            </div>
        )
    }
}

export default news;