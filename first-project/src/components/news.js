import React from 'react';
import propTypes from 'prop-types';
import NewsForm from './NewsForm';
import NewsItem from './NewsItem';

class news extends React.Component{
    static defaultProps = {
        name: "Osman"
    //if we do not give name value in app.js, it'll print default value as "Osman"
    //also we do not need "isRequired" statement if we use defaultProps.
    }
    render(){
        const element = this.props.news.map(news => <NewsItem 
            key={news.id}
            newsData = {news}/>
            );
        return(
            <div>
                {this.props.name}
                {element}
                <NewsForm/>
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
    ]).isRequired
    //if we define wrong these types, console will give us an error.
}

export default news;