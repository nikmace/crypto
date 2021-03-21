import React from 'react';
import isAuth from '../components/login/auth/isAuth';

function Watchlist() {
    const {email} = isAuth();
    

    return (
        <div className="watchlist">
            <h1>Watchlist</h1>
            {email ? (
                <h1>Here is your list of coins  {email}</h1>
            ) : (
                <h1>You are not logged in and cannot view this page</h1>
            )}
        </div>
    )
}

export default Watchlist;
