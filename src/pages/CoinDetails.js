import React from 'react';
import { useParams } from 'react-router-dom';
import BarChart from '../components/charts/BarChart';
import CoinDetailsData from '../components/coins/CoinDetailsData'

function CoinDetails() {
    const { id } = useParams();

    return (
        <div>
            <CoinDetailsData id={id} />
            <BarChart id={id} />
        </div>
    )
}

export default CoinDetails;
