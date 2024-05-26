import React from 'react';
import styled,{keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

const Container=styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    gap:3vw;

    justify-content: start;
    align-items: start;

    width: 50%;
    height: 100%;
`;
const Logo=styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;

    font-family: ${({theme})=>theme.fonts.english};
    font-style: ${({theme})=>theme.fonts.style};
    font-size:${({theme})=>theme.fontSize.logo};
    font-weight: 700;
    letter-spacing: ${({ theme }) => theme.fonts.logoLetterSpace};
    /* font-weight: ${({theme})=>theme.fontWeights.lo}; */
    color:${({theme})=>theme.colors.white};

    /* background-color: blue; */
    .lion{
        color:${({theme})=>theme.colors.mainColor};
    }
`;

const rotate = keyframes`
    from {
        background: linear-gradient(105deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%);
        opacity: 1;
    }
    25% {
        background: linear-gradient(105deg, rgba(254,88,38,0.5) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.5) 100%);
        opacity: 0.75;
    }
    50% {
        background: linear-gradient(105deg, rgba(0,0,0,0) 0%, rgba(32,8,1,0.25) 50%, rgba(254,88,38,0.25) 100%);
        opacity: 0.5;
    }
    75% {
        background: linear-gradient(105deg, rgba(0,0,0,0) 0%, rgba(32,8,1,0.5) 50%, rgba(254,88,38,0.5) 100%);
        opacity: 0.75;
    }
    to {
        background: linear-gradient(105deg, rgba(32,8,1,0.75) 0% , rgba(254,88,38,0.75) 50%, rgba(0,0,0,0) 100%);
        opacity: 1;
    }
`;

const Circle=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 80%;
    padding: 40%; 
    /* 원의 가로길이와 높이를 같게 만듦 */

    
    backdrop-filter: blur(100px);
    /* border: solid 0.5px; */
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
    transition: background-color 0.2s;

    .slogan{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.english};
        font-size: 7vw;
        max-width: 90%; /* 슬로건이 원 안에 넘치지 않도록 최대 너비 설정 */
        white-space: nowrap;
    }
`;


const LogoCircleDiv=()=>{

    return(
        <>
            <Container>
                <Link to={'/'}>
                    <Logo>
                        <p>HUFS</p>
                        <p className='lion'>LION</p>
                    </Logo>
                </Link>
                <Circle>
                    <p className='slogan'>GROWL - TO<br/>- &gt; WORLD</p>
                </Circle>
            </Container>
        </>
    );
};

export default LogoCircleDiv;