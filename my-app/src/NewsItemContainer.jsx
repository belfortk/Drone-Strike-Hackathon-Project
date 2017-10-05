import React from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

class NewsItemContainer extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            articles: []

        };
    }

    componentWillMount (){
        var encodedURI = window.encodeURI('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=24014cb342f648519e18b10ce91e3737&q=drone strike');
        axios.get(encodedURI)
        .then(res => {
            var topPosts = (res.data.response.docs).slice(0,4)
            this.setState({
                articles: topPosts
            });
        })
     
    }


    render(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    
        return(
            <div className='card'>
                <div className='card-header text-muted text-center' style={ {backgroundColor:'#d3d3d3' }}>
                     <h4> <strong>Latest NYT Articles </strong> </h4> 
                </div>

            {(this.state.articles).map((article) => (
                <NewsItem
                key={ getRandomInt(0, 1000) }
                articleTitle={ article.headline.print_headline }
                articleData={ article.snippet }
                articleLink={ article.web_url }
                 />)
            )}
            </div>
        );
}
}

export default NewsItemContainer;