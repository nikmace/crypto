import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './Main.css';
import Loader from '../loader/Loader';

function Main() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input className="coin-input" placeholder="Search" type="text" onChange={handleChange} />
                </form>
            </div>
            
            {loading ? (
                <Loader />
            ) : (

                filteredCoins.map((coin) => {
                    return (
                        <Coin 
                            key={coin.id} 
                            name={coin.name} 
                            image={coin.image} 
                            symbol={coin.symbol} 
                            price={coin.current_price} 
                            marketcap={coin.market_cap} 
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume} 
                            id={coin.id}
                        />
                    )
                })     
            )}
        </div>
    )
}

export default Main;
