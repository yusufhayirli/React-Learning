import React from 'react';
import NewsItem from './newsitem';

class news extends React.Component{
    render(){
        return(
            <div>
                {2 + 2 === 4 ? "true" : "false"}
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

export default news;