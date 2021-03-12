import React from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CoinLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

function Coin({ id, image, name, symbol, price, volume, priceChange, marketcap }) {
    return (
        
        <div className="coin-container">
            <CoinLink to={`/coins/${id}`}>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price.toLocaleString()}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
            </CoinLink>
        </div>
    )
}

export default Coin;
