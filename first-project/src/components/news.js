import React from 'react';
import NewsItem from './newsitem';

class news extends React.Component{
    render(){
        const title = "my title";
        const description = "title's description";
        return(
            <div>
                {2 + 2 === 4 ? "true" : "false"}
                
                <NewsItem 
                    title = {title}
                    description = {description} />
            </div>
        )
    }
}

export default news;