import React, { useState, useEffect } from 'react';
import './WalletDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import TransactionsTable from './transactions/TransactionsTable';
import axios from 'axios';
import Loader from '../loader/Loader';

const useStyles = makeStyles({
    button: {
        backgroundColor: '#632ce4',
        "&:hover": {
            backgroundColor: "#8759f2",
        },
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '2px'
    }
});

function WalletDetails() {
    const classes = useStyles();
    const [success, setSuccess] = useState(false);
    const [confirmed, setConfirmed] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        e.preventDefault();
        setLoading(true);
        setSearch(e.target.value);
    }
    
    let uri = `https://api.smartbit.com.au/v1/blockchain/address/${search}?limit=5`;
    useEffect(() => {
        
        if (search) {
                axios.get(uri)
                    .then((res) => {
                        setSuccess(res.data.success);
                        setConfirmed(res.data.address.confirmed);
                        setTransactions(res.data.address.transactions);
                        
                    })
                    .catch((err) => {
                        console.log(err);
                        setError(err)
                    });
                    
            setLoading(false);  
        }
        if (search === '') {
            setSuccess(false)
            setConfirmed({})
            setTransactions([]);
            setLoading(false);
        }
    }, [search])

    console.log(confirmed);
    console.log(search)
    console.log(error.message)
    console.log("Loading : " + loading)

    return (
        <>
        <div className="wallet-details">
            <div className="wallet">
                <div className="wallet-search">
                    <form>
                        <input type="text" className="wallet-input" onChange={handleChange}/>
                    </form>
                </div>
                {success ? (
                    <div className="wallet-info">
                        <h1>Searching for address: {search}</h1>
                        <div className="wallet-info-main">
                            <span><h3>Balance:</h3> {confirmed.balance}</span>
                            <span><h3>Recieved:</h3> {Number(confirmed.received).toFixed(4)}</span>
                            <span><h3>Spent:</h3> {Number(confirmed.spent).toFixed(4)}</span>
                            <span><h3>Transaction Count:</h3> {confirmed.transaction_count}</span>
                        </div>
                    </div>
                ) : (
                    <>
                    {error.message ? (
                        <div 
                            style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}
                        >The Bitcoin Address was not found or the input adress was invalid</div>
                    ) : (
                        <h2 
                            style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}
                        >Search a Bitcoin Address</h2>
                    )}
                    </>
                )}

            </div>
            
        </div>
        {success && transactions ? (
            <TransactionsTable transactions={transactions} success={success}/>
        ) : (
            <div></div>
        )}

        {loading ? (
            <div><Loader /></div>
        ) : (
            <div></div>
        )}
        </>
    )
}

export default WalletDetails;
