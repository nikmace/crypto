import React, { useState, useEffect } from 'react';
import AiCard from './AiCard';
import '../news.css';
import axios from 'axios';
import Loader from '../../loader/Loader';

const options = {
    method: 'GET',
    url: 'https://a-i-smartable.p.rapidapi.com/news/page/1/',
    headers: {
      'x-rapidapi-key': '02c419759amshd936e3e8cbb7135p1de311jsncdd835665834',
      'x-rapidapi-host': 'a-i-smartable.p.rapidapi.com'
    }
};

function AiDetails() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.request(options).then(function (response) {
            setArticles(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const filteredArticles = articles.filter(article => 
        article.images !== null
    )
        
    return (
        <div className="container">
                <div className="title">
                    <h5>A.I</h5>
                    <h1>Artificial Intelligence News</h1>
                </div>
                
                <div className="column-card">
                {loading ? (
                    <Loader />
                ) : (
                    filteredArticles.map((article, index) => {
                        return (
                            <AiCard 
                                key={index}
                                category={article.categories}
                                summary={article.excerpt}
                                title={article.title}
                                topics={article.topics}
                                date={article.publishedDateTime}
                                originalUrl={article.originalUrl}
                                webUrl={article.webUrl}
                                providerDomain={article.provider.domain}
                                providerName={article.provider.name}
                                image={article.images[0].url}
                            />
                        )
                    })
                )}
                </div>
        </div>
    )
}

export default AiDetails;
