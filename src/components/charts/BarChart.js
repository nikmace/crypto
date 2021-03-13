import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import * as ReactBootStrap from 'react-bootstrap';

const LineChart = ({ id }) => {
    const [price, setPrice] = useState([]);
    const [time, setTime] = useState([]);

    function getPrices() {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
            .then((res) => {
                let p = [];
                let t = [];
                res.data.prices.forEach((price) => {
                    let timestamp = moment(price[0]).format('MMMM Do YYYY, h:mm:ss a');

                    p.push(price[1].toFixed(2));
                    t.push(timestamp);
                })
                setPrice(p);
                setTime(t);
            })
            .catch((err) => console.log(err));
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const currId = capitalizeFirstLetter(id);

    useEffect(() => {
        getPrices();
    }, [])


    return (
        
        <div>
            
            <Line 
                data={{
                    labels: time,
                    datasets: [
                        {
                            label: 'Price change',
                            data: price,
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
                        text: `${currId} Price`,
                        fontSize: 22,
                    },
                    tooltips: {
                        backgroundColor: '#15171c',
                        mode: 'index',
                        intersect: false,
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
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                }
                            }
                        ],
                        xAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                display: false,
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default LineChart;