import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './CoinDetails.css';
import moment from 'moment';
import Loader from '../loader/Loader';

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 20rem;
`;

const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
    background: #15171c;
`;

function CoinDetailsData({ id }) {
    const [coins, setCoins] = useState({});
    const [marketData, setMarketData] = useState({});
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState({});

    let date = new Date().getTime();
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setCoins(res.data);
                setMarketData(res.data.market_data);
                setPrice(res.data.market_data.current_price);
                setLoading(false);
            })
            .catch((err) => console.log(err));
            
    }, [id]);

    const { name, block_time_in_minutes, hashing_algorithm,  categories,  genesis_date, market_cap_rank } = coins;
    const { usd } = price;
    const {  price_change_percentage_7d, price_change_percentage_14d, price_change_percentage_24h } = marketData;

    return (
        <>
        <ContainerDiv>
            <DetailColumn></DetailColumn>
            <div className="b-card">
                <div className="inner-part">
                    <label htmlFor="imgTap" className="img" >
                        <img className="img-1" src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2020/10/Bitcoin-and-alt-coins-cryptocurrency.jpg" alt="cryptocurrency"/>
                    </label>
                    <div className="content">
                        <span>{date}</span>
                    <div className="title">
                        {name}
                    </div>
                    <div className="text">
                        {loading ? (
                            <Loader />
                        ) : (
                            <>
                                <p>Price: &nbsp; ${usd}</p>
                                <p>Block mining time in min: &nbsp; {block_time_in_minutes}</p>
                                <p>Hashing algorithm: &nbsp; {hashing_algorithm ? hashing_algorithm : 'none'}</p>
                                <p>Category: &nbsp; {categories ? categories : 'Crypto'}</p>
                                <p>Mkt cap rank: &nbsp; {market_cap_rank ? market_cap_rank : 'not stated'}</p>
                                <p>Genesis date: &nbsp; {genesis_date ? genesis_date : 'not stated'}</p>
                                <p>Price change 24h: </p>
                                {price_change_percentage_24h > 0 ? (
                                    <p className="green">{price_change_percentage_24h}%</p>
                                ) : (
                                    <p className="red">{price_change_percentage_24h}%</p>
                                )}
                                <p>Price change 7d: </p>
                                {price_change_percentage_7d > 0 ? (
                                    <p className="green">{price_change_percentage_7d}%</p>
                                ) : (
                                    <p className="red">{price_change_percentage_7d}%</p>
                                )}
                                <p>Price change 14d: </p>
                                {price_change_percentage_14d > 0 ? (
                                    <p className="green">{price_change_percentage_14d}%</p>
                                ) : (
                                    <p className="red">{price_change_percentage_14d}%</p>
                                )}
                            </>
                        )}

                    </div>
                    </div>
                </div>
            </div>
        </ContainerDiv>
        
        </>
    )
}

export default CoinDetailsData;
