import React from 'react';
import '../news.css';

function AiCard({ category, summary, title, topics, date, image, originalUrl, providerDomain, providerName }) {
    

    return (
        <>
            <div className="card">
                <h2>{title}</h2>
                <img src={image} alt="crypto"></img>
                <div className="panel">
                    <p id="linkId">{summary}</p>
                    <span className="breaker">Topic: {topics ? topics : 'none'}</span>
                    <p>Category: {category}</p>
                    <p>Provider Name: {providerName}</p>
                    <div className="linkDiv">Link: &nbsp;<a href={originalUrl}><h4>{providerDomain}</h4></a></div>
                    <span className="date">Published: {date}</span>
                </div>
            </div>
        </>
    )
}

export default AiCard;
