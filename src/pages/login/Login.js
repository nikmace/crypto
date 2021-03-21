import React, { useState, useEffect } from 'react';
import fire from '../../fire';
import LoginUser from '../../components/login/LoginUser';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

function Login() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                let token = jwt.sign({email: user.email}, 'SALAMI');
                Cookies.set('token', token, { expires: 1, secure: false });
                clearInputs();
            } else {
                Cookies.remove('token');
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])

    return (
        <div>
            {user ? (
                <Redirect to="/" />
            ) : (
                <LoginUser 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin} 
                handleSignUp={handleSignUp} 
                hasAccount={hasAccount} 
                setHasAccount={setHasAccount} 
                emailError={emailError} 
                passwordError={passwordError} 
                />
            )}
        </div>
    )
}

export default Login;
