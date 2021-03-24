import React, { useState, useEffect } from 'react';
import './WalletDetails.css';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TransactionsTable from './transactions/TransactionsTable';
import axios from 'axios';

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
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    let uri = `https://api.smartbit.com.au/v1/blockchain/address/${search}?limit=15`;
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
                    setSearch('')
        }
    }, [search])

    console.log(confirmed);
    console.log(search)
    console.log(error)

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
                        <p>Balance: {confirmed.balance}</p>
                    </div>
                ) : (
                    <>
                    {error.message ? (
                        <div>The Bitcoin Address was not found or the input adress was invalid</div>
                    ) : (
                        <h2>Search a Bitcoin Address</h2>
                    )}
                    </>
                )}

            </div>
            
        </div>
        {success ? (
            <TransactionsTable transactions={transactions} success={success}/>
        ) : (
            <div></div>
        )}
        </>
    )
}

export default WalletDetails;
