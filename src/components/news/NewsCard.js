import React from 'react';
import './news.css';
import { Link } from 'react-router-dom';

const cryptoList = [
    'bitcoin',
    'ethereum',
    'dogecoin',
    'xrp',
    'darkcoin',
    'thether',
    'polkadot',
    'cardano',
    'uniswap',
    'litecoin',
    'chainlink',
    'bitcoin-cash',
    'usd-coin',
    'stellar',
    'wrapped-bitcoin',
    'solana',
    'cosmos',
    'terra',
    'monero',
    'ether',
];

function NewsCard({ summary, published, rank, clean_url, author, link, title, topic, media }) {
    
    let cryptoValue = '';
    let cryptoLink = '';
    cryptoList.forEach((crypto) => {
        if (summary.toLowerCase().includes(crypto)) {
            if (crypto === 'xrp') {
                crypto = 'ripple';
            }
            if (crypto === 'ether') {
                crypto = 'ethereum';
            }
            cryptoValue = crypto;
            cryptoLink = `/coins/${crypto}`;
        }
    })

    return (
        <>
            <div className="card">
                <h2>{title}</h2>
                <img src={media} alt="crypto"></img>
                <div className="panel">
                    <p id="linkId">{summary}</p>
                    {cryptoValue ? (<span>Cryptocurrency mentioned here: <Link to={cryptoLink}><h4>{cryptoValue.toUpperCase()}</h4></Link></span>) : '\n'}
                    <span className="breaker">Topic: {topic}</span>
                    <p>Author: {author ? author : 'not stated'}</p>
                    <p>Rank: {rank}</p>
                    <div className="linkDiv">Link: &nbsp;<a href={link}><h4>{clean_url}</h4></a></div>
                    <span className="date">Published: {published}</span>
                </div>
            </div>
        </>
    )
}

export default NewsCard;
