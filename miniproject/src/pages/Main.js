import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;
`;

const Circle=styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;

    width:619px;
    height:619px;

    margin:160px auto 0px auto;
    
    border-radius:100%;
    background: linear-gradient(105deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%);
`;

const Slogan=styled.p`
    margin:auto 0;

    color:${({theme})=>theme.colors.white};
    font-family:${({theme})=>theme.fonts.english};
    font-size:${({theme})=>theme.fontSize.slogan};
`;
const StarContainer=styled.div`
    display:flex;
    flex-direction:colum;

    position:fixed;
    left:50px;
    top:200px;
`;
const Star=styled.div`
    width:70px;
    heigt:70px;

    background:${({theme})=>theme.colors.white};

    margin:20px;
`;
const Main = () => {

    return(
        <>
            <Container>
                <Header />
                <Circle>
                    <Slogan>GROWL - TO<br/>- &gt; WORLD</Slogan>
                    {/* <Slogan>WORLD</Slogan> */}
                </Circle>
                <StarContainer>
                    <Star />
                </StarContainer>
                <Footer />
            </Container>
            
        </>
    )
}

export default Main;