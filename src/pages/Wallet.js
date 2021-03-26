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
                    <h1>You can now search a Bitcoin address in the Blockchain {email}</h1>
                    <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Paste the address into the field below</p>
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
