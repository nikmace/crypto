import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import {SidebarData} from './SidebarData';
import fire from 'firebase';

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
     padding: 0.1em 0.8em;
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
`;

const LoginDiv = styled.div`
    margin-left: 10rem;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 15px;
`;

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        fire.auth().signOut();
    };

    return (
        <>
            <Nav to="#">
                <NavIcon>
                    <FaIcons.FaBars onClick={showSidebar}/>
                    
                </NavIcon>
                <LoginDiv>
                <LoginLink to="/auth/login">Login</LoginLink>
                <LoginLink to="/" onClick={handleLogout}>Logout</LoginLink>
                </LoginDiv>
            </Nav>
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap >                  
                    <NavIcon to="#">
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
