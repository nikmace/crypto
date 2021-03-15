import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './news.css';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
    params: {q: 'cryptocurrency', lang: 'en', media: 'True'},
    headers: {
      'x-rapidapi-key': '02c419759amshd936e3e8cbb7135p1de311jsncdd835665834',
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
    }
};

function NewsDetails() {
    const [articles, setArticles] = useState([])

    function getNews() {
        axios
            .request(options)
            .then((res) => {
            setArticles(res.data.articles);
        }).catch((err) => {
            console.error(err);
        });
    }
    
    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="container">
                <div className="title">
                    <h5>News</h5>
                    <h1>Fresh Finance News</h1>
                </div>
                
                <div className="column-card">                   
                    {articles.map((article) => {
                        return (
                            <NewsCard 
                                summary={article.summary}
                                published={article.published_date}
                                rank={article.rank}
                                clean_url={article.clean_url}
                                author={article.author} 
                                link={article.link} 
                                media={article.media}
                                title={article.title} 
                                topic={article.topic} 
                                key={article.id} />
                        )
                    })}
                </div>
            </div>
    )
}

export default NewsDetails;
