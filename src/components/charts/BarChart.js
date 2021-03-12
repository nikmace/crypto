import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';

const BarChart = () => {
    let prices = [];
    let time = [];

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30')
            .then((res) => {
                res.data.prices.forEach((price) => {
                    let timestamp = moment(price[0]).format('MMMM Do YYYY, h:mm:ss a');
                    //1293683278
                    //1615536248289

                    prices.push(price[1].toFixed(2));
                    time.push(timestamp);
                })
            })
    }, [])


    return (
        
        <div>
            <Line 
                data={{
                    labels: time,
                    datasets: [
                        {
                            labels: 'price change',
                            data: prices,
                        }
                    ]
                }}
                height={600}
                width={500}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            left: 250,
                            right: 200,
                            top: 0,
                            bottom: 0,
                        }
                    },
                    title: {
                        display: true,
                        text: 'Bitcoin Price',
                        fontSize: 22,
                    },
                    tooltips: {
                        backgroundColor: '#15171c',
                    },
                    elements: {
                        line: {
                            borderColor: '#15171c',
                            borderWidth: 2,
                            backgroundColor: '#BAA3F4'
                        }
                    },
                    legend: {

                    },
                    animation: {
                        eeasing: 'linear'
                    },
                    hover: {
                        animationDuration: 0,
                    },
                    responsiveAnimationDuration: 0,
                }}
            />
        </div>
    )
}

export default BarChart;