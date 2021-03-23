import React from 'react';
import isAuth from '../components/login/auth/isAuth';
import TransactionsTable from '../components/crypto-wallet/transactions/TransactionsTable';
import Unauthorized from './not-found/Unauthorized';

function Wallet() {
    const {email} = isAuth();
    

    return (
        <div className="watchlist">
            <h1>Wallet</h1>
            {email ? (
                <>
                    <h1>Here is your list of coins  {email}</h1>
                    <TransactionsTable />
                </>
            ) : (
                <>
                    <Unauthorized />
                </>
            )}
        </div>
    )
}

export default Wallet;
