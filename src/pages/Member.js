import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

import Footer from '../components/Footer';
import Image from '../image/test.jpg';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    flex-wrap: wrap;
    gap:5vw;
`;
const MemberContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    gap: 1vw;

    width: 80%;

    color:${({theme})=>theme.colors.white};
    background:rgba(255,255,255,0.19);
    /* border-radius:20px; */
    /* border-radius:35px 35px 0px 0px; */
    border-radius: 35px;
`;
const MemberHeader=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    border-radius:35px 35px 0px 0px;

    color:${({theme})=>theme.colors.white};
    background:rgba(255,255,255,0.19);
`;
const MemberHeaderButton=styled.button`
    align-items: center;

    width: 100%;
    padding:1vw 0vw 1vw 0vw;
    color:${({theme})=>theme.colors.white};
    /* background:rgba(255,255,255,0.19); */
    border-radius:35px 35px 0px 0px;

    font-size: ${({theme})=>theme.fontSize.memberHeader};
    font-family: ${({theme})=>theme.fonts.english};

    &:hover{
    color:${({theme})=>theme.colors.mainColor};
    background:${({theme})=>theme.colors.white};
    /* border-radius:20px ; */
    transition: all 0.1s;
    }
    &:active{
    color:${({theme})=>theme.colors.white};
    background:${({theme})=>theme.colors.mainColor};
    /* border-radius:20px; */
    transition: all 0.1s;
    }
`;
const MemberPositionDiv=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:3vw;

    margin-top:2%;
`;
const MemberPosition=styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:3vw;

    font-family: ${({theme})=>theme.fonts.korean};
    font-size: ${({theme})=>theme.fontSize.memberPosition};

    color:${({theme})=>theme.colors.white};
    border-bottom: 0.2vw solid ${({theme})=>theme.colors.white};
    padding:0vw 1.5vw 0vw 1.5vw;
    &:hover{
        color:${({theme})=>theme.colors.mainColor};
        border-bottom: 0.4vw solid ${({theme})=>theme.colors.mainColor};
        padding:0vw 1.5vw 0vw 1.5vw;
        transition: all 0.1s;
    }

    &:active{
        color:${({theme})=>theme.colors.mainColor};
        border-bottom: 0.5vw solid ${({theme})=>theme.colors.mainColor};
        padding:0vw 1.5vw 0vw 1.5vw;
        transition: all 0.1s;
    }
`;
const MemberList=styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;

    width:90%;
    /* background-color: red; */
    padding:2vw;
`;
const MemberDetail=styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;

    width: 100%;

    font-family: ${({theme})=>theme.fonts.korean};
    font-weight: ${({theme})=>theme.fontWeights.memberHeader};
    .userName{
        font-size:${({theme})=>theme.fontSize.memberContentName};
    }
    .year{
        font-size:${({theme})=>theme.fontSize.memberContentYearPosition};
    }
    .position{
        font-size:${({theme})=>theme.fontSize.memberContentYearPosition};
    }
`;
const MemberImage=styled.image`
    width: 15vw;
    height: 15vw;

    /* width:2%;
    height:2%; */

    background-image: url('https://i.pinimg.com/564x/33/5f/14/335f1418109df8cf8bdbe15f80d621c4.jpg');
`;
const MemberDetailText=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    
    flex-wrap: wrap;
    gap: 1.5vw;

    width: 60%;

    .TextHeader{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        
        flex-wrap: wrap;
        gap: 2vw;

        color: ${({theme})=>theme.colors.white};
        font-family: ${({theme})=>theme.fonts.korean};
        font-size: ${({theme})=>theme.fontSize.memberContentTextHeader};
    }
    .TextContent{
        width: 100%;
        padding : 30px;
        color:${({theme})=>theme.colors.memberDetail};
        background-color: ${({theme})=>theme.backgroundColor.memberContent};
        border-radius: 15px;
    }
`;
const Member=()=>{
    return(
        <>
            <Container>
                <Header />
                <MemberContainer>
                    <MemberHeader>
                        <MemberHeaderButton>9th</MemberHeaderButton>
                        <MemberHeaderButton>10th</MemberHeaderButton>
                        <MemberHeaderButton>11th</MemberHeaderButton>
                        <MemberHeaderButton>12th</MemberHeaderButton>
                    </MemberHeader>
                    <MemberPositionDiv>
                        <MemberPosition>아기사자</MemberPosition>
                        <MemberPosition>운영진</MemberPosition>
                    </MemberPositionDiv>
                    <MemberList>
                        <MemberDetail>
                            <MemberImage />
                            <MemberDetailText>
                                <div className='TextHeader'>
                                    <span className='userName'>김준영</span>
                                    <span className='year'>12기</span>
                                    <span className='position'>BE</span>
                                </div>
                                <div className='TextContent'>
                                    으 왜 안떠!!!
                                </div>
                            </MemberDetailText>
                        </MemberDetail>
                    </MemberList>
                </MemberContainer>
                <Footer />
            </Container>
        </>
    )
}

export default Member