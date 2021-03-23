import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';
import './NotFound.css';

const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function NotFound() {
    return (
        <div className="notfound">
            <NotFoundDiv>
                <p className="zoom-area"><b>Oops!</b> The page you are looking for does not exist. How you got here is mystery. But you can click the button below to go back to the homepage.</p>
                    <section className="error-container">
                        <span className="four"><span className="screen-reader-text">4</span></span>
                        <span className="zero"><span className="screen-reader-text">0</span></span>
                        <span className="four"><span className="screen-reader-text">4</span></span>
                    </section>
                <div className="link-container">
                    <a href="/" className="more-link">Go back to Home</a>
                </div>
            </NotFoundDiv>
        </div>
    )
}

export default NotFound;
