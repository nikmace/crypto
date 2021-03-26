import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './news.css';
import axios from 'axios';
import Loader from '../loader/Loader';

const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
    params: {q: 'crypto', lang: 'en', page_size: '60', media: 'True'},
    headers: {
      'x-rapidapi-key': '02c419759amshd936e3e8cbb7135p1de311jsncdd835665834',
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
    }
};

function NewsDetails() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    
    
    useEffect(() => {
        setLoading(true);
        axios
            .request(options)
            .then((res) => {
            setArticles(res.data.articles);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <div className="container">
                <div className="title">
                    <h5>News</h5>
                    <h1>Fresh Finance News</h1>
                </div>
                
                <div className="column-card">
                    {loading ? (
                        <Loader />
                    ): (
                        articles.map((article) => {
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
                        })
                    )}                   
                </div>
            </div>
    )
}

export default NewsDetails;
