import React from 'react';
import { useParams } from 'react-router-dom';
import LineChart from '../components/charts/BarChart';
import CoinDetailsData from '../components/coins/CoinDetailsData'

function CoinDetails() {
    const { id } = useParams();

    return (
        <div>
            <CoinDetailsData id={id} />
            <LineChart id={id} />
        </div>
    )
}

export default CoinDetails;
