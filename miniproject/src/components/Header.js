import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

import {BsCaretDownFill} from 'react-icons/bs';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    align-items:center;
    
    margin:50px auto auto 90px;
`;

const Logo=styled.p`
    margin-right:90px;
    font-weight:700;
    font-family:${({theme})=>theme.fonts.english}
    font-style:${({theme})=>theme.fonts.style};
    letter-spacing:${({theme})=>theme.fonts.logoLetterSpace};

    .hufs{
        color:${({theme})=>theme.colors.white};
        font-size:${({theme})=>theme.fontSize.logo};
    }
    .lion{
        color:${({theme})=>theme.colors.mainColor};
        font-size:${({theme})=>theme.fontSize.logo};
    }
`;
const Select=styled.div`
    display:flex;
    flex-direction: row;

    margin: auto 30px;
    padding:14px 18px 9px 26px;
    text-align:center;

    font-weight:700;
    font-family:${({theme})=>theme.fonts.english}
    font-style:${({theme})=>theme.fonts.style};
    letter-spacing:${({theme})=>theme.fonts.logoLetterSpace};

    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSize.headerFont};

    &:hover{
        color:${({theme})=>theme.colors.mainColor};
    }

    &:active{
        color:${({theme})=>theme.colors.white};
        border-color:transparent;
        border-radius : 25px 25px 0px 0px;
        background-color:${({theme})=>theme.colors.mainColor};
    }
    
`;

const UserImg=styled.div`
    margin-left:90px;
    margin-right:30px;

    width:50px; 
    height:50px;
    border-radius:100%;
    background-color:${({theme})=>theme.colors.mainColor};
`;
const LoginBtn=styled.button`
    padding:7px 20px;
    font-size:${({theme})=>theme.fontSize.login};
    color:${({theme})=>theme.colors.white};
    background-color:${({theme})=>theme.colors.mainColor};
    border-radius:15px;

    font-weight:700;
    font-family:${({theme})=>theme.fonts.english}
    font-style:${({theme})=>theme.fonts.login};
    letter-spacing:${({theme})=>theme.fonts.logoLetterSpace};
`;

const Header = () => {

    return(
        <>
            <Container>
                <Link to='/'>
                    <Logo>
                        <span className='hufs'>HUFS</span>
                        <span className='lion'>LION</span>
                    </Logo>
                </Link>
                <Link to={'/project'}>
                    <Select>
                        PROJECT
                        <BsCaretDownFill />
                    </Select>
                </Link>
                <Link to={'/curriculum'}>
                    <Select>
                        CURRICULUM
                        <BsCaretDownFill />
                    </Select>
                </Link>
                <Link to={'/member'}>
                    <Select>
                        MEMBER
                        <BsCaretDownFill />
                    </Select>
                </Link>
                <Link to={'/profile'}>
                    <Select>
                        PROFILE
                        <BsCaretDownFill />
                    </Select>
                </Link>
                <UserImg />
                <Link to={'/login'}>
                    <LoginBtn>
                        LOGIN
                    </LoginBtn>
                </Link>
            </Container>
        </>
    )
}

export default Header;