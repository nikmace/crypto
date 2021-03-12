import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border:2px solid black;

`;

const CoinDiv = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
    min-width: 300px;
`;

const CoinImg = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;

function CoinDetailsData({ id }) {
    const [coins, setCoins] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setCoins(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    const { image, name, block_time_in_minutes, hashing_algorithm,  categories, market_data, genesis_date, market_cap_rank } = coins;
    const { description, last_updated } = coins;
    console.log(coins)
    return (
        <ContainerDiv>
            <DetailColumn>
                <CoinDiv>
                    <h1>{name}</h1> 
                </CoinDiv>
                <CoinDiv>
                    <h4>Block mining time in min: &nbsp;</h4> {block_time_in_minutes}
                </CoinDiv>
                <CoinDiv>
                    <h4>Hashing algorithm: &nbsp;</h4> {hashing_algorithm ? hashing_algorithm : 'none'}
                </CoinDiv>
                <CoinDiv>
                    <h4>Category: &nbsp;</h4> {categories ? categories : 'Crypto'}
                </CoinDiv>
                <CoinDiv>
                    <h4>Current price: &nbsp;</h4> {}
                </CoinDiv>
                <CoinDiv>
                    <h4>Description: &nbsp;</h4> <p>{}</p>
                </CoinDiv>
                <CoinDiv>
                    <h4>Mkt cap rank: &nbsp;</h4> {market_cap_rank ? market_cap_rank : 'not stated'}
                </CoinDiv>
                <CoinDiv>
                    <h4>Genesis date: &nbsp;</h4> {genesis_date ? genesis_date : 'not stated'}
                </CoinDiv>
                <CoinDiv>
                    <h4>Last updated: &nbsp;</h4> {last_updated}
                </CoinDiv>
            </DetailColumn>
        </ContainerDiv>
    )
}

export default CoinDetailsData;
