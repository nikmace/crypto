import React from 'react';
import isAuth from '../components/login/auth/isAuth';
import Unauthorized from './not-found/Unauthorized';
import WalletDetails from '../components/crypto-wallet/WalletDetails'

function Wallet() {
    const {email} = isAuth();
    

    return (
        <div className="watchlist">
            <h1>Wallet</h1>
            {email ? (
                <>
                    <h1>Here is your list of coins  {email}</h1>
                    <WalletDetails />
                    
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
