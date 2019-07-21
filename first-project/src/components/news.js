import React from 'react';
import NewsItem from './newsitem';

class news extends React.Component{
    render(){
        const element = this.props.news.map(news => 
        <div key={news.id}><NewsItem 
            title = {news.title}
            description = {news.description} />
        </div>
        );
        return(
            <div>
                {element}
            </div>
        )
    }
}

export default news;