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
    justify-content: start;
    align-items: center;
    border:2px solid black;
    margin-bottom: 100px;
`;

function CoinDetailsData({ id }) {
    const [coins, setCoins] = useState({});
    const [loading, setLoading] = useState(false);

    let date = new Date().getTime();
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setCoins(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
            
    }, [id]);

    const {  name, block_time_in_minutes, hashing_algorithm,  categories,  genesis_date, market_cap_rank, last_updated } = coins;
    
    return (
        <>
        <ContainerDiv>
            <DetailColumn>
                
            </DetailColumn>
            <div className="blog-card">
                <div className="inner-part">
                    <label for="imgTap" class="img">
                        <img className="img-1" src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2020/10/Bitcoin-and-alt-coins-cryptocurrency.jpg" />
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
                                <p>Block mining time in min: &nbsp; {block_time_in_minutes}</p>
                                <p>Hashing algorithm: &nbsp; {hashing_algorithm ? hashing_algorithm : 'none'}</p>
                                <p>Category: &nbsp; {categories ? categories : 'Crypto'}</p>
                                <p>Mkt cap rank: &nbsp; {market_cap_rank ? market_cap_rank : 'not stated'}</p>
                                <p>Genesis date: &nbsp; {genesis_date ? genesis_date : 'not stated'}</p>
                                <p>Last updated: &nbsp; {last_updated}</p>
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
