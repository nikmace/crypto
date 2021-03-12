import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
                <h1>404 - Not Found</h1>
                <Link to="/">
                    Go back to Home
                </Link>
            </NotFoundDiv>
        </div>
    )
}

export default NotFound;
