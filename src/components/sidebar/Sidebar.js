import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import {SidebarData} from './SidebarData';
import fire from 'firebase';
import isAuth from '../login/auth/isAuth';
import Cookies from 'js-cookie';


const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const LoginLink = styled(Link)`
     padding: 0.3em 0.7em;
     margin: 0;
     border-radius: 2em;
     box-sizing: border-box;
     text-decoration: none;
     font-family: 'Roboto',sans-serif;
     font-weight: 300;
     color: #FFFFFF;
     background-color: #632ce4;
     text-align: center;
     transition: all 0.2s;
    font-size: 20px;
    
    &:hover {
        background: #8759f2;
    }
`;

const LoginDiv = styled.div`
    margin-left: 5rem;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 15px;
`;

const SiteNameH1 = styled.h1`
    color: #f5f5f5;
    margin-left: 5rem;
`;

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const [auth, setAuth] = useState('');

    const showSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        fire.auth().signOut();
        Cookies.remove('token');
        setAuth('');
    };

    useEffect(() => {
        const {email} = isAuth();
        setAuth(email);
    }, [auth]);
    
    return (
        <>
            <Nav>
                <NavIcon>
                    <FaIcons.FaBars onClick={showSidebar}/>                
                </NavIcon>
                <Link to="/">
                    <SiteNameH1>
                        crypto
                    </SiteNameH1>
                </Link>
                
                <LoginDiv>
                    {auth ? (
                        <LoginLink to="/" onClick={handleLogout} >Logout</LoginLink>
                    ) : (
                        <LoginLink to="/auth/login">Login</LoginLink>
                    )}
                </LoginDiv>
            </Nav>
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap >                  
                    <NavIcon >
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar;
