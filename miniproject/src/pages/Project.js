import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;


    .link{
        margin:30px auto;
    }
`;

const Text=styled.p`
    color:blue;
    font-weight:700;

    margin:30px auto;
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 1385px;

    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    color:red;
    padding-top:50px;
    padding-right:77px;

`;
const Buttondiv=styled.button`
    width : 195px;
    height : 65px;
    background-color:rgba(255,255,255,0.19);
    border-radius:15px;
    color:white;
    text-aline:center;
    line-height: 65px;
    float:right;
    font-size:28px;
    font-weight : 700;
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    font-family: "Noto+Sans+KR", serif;

    &:hover{
        background-color:white;
        color:#FE5826;
    }
`;
const MainDiv=styled.div`
   
    border-radius:20px;
    input type="text"
    margin-top:165px;

    display:flex;
    flex-direction:row;
    
    justify-content:space-between;
    margin-top:100px;
    margin-left:77px;
`;

const EachDiv=styled.div`

    width : 250px;
    height : 250px;
    background-image:   
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
`;

const Eachtext=styled.p`
    color:white;
    text-aline:center;
    font-size:50px;
    font-weight : 400;
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    font-family: "Jersey+15", serif;

`;

const Project=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Project</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Link to={'/projectUpload'} className='link'>
                    Project upload 페이지로 이동
                </Link>
                <Link to={'/projectDetail'} className='link'>
                    Project detail 페이지로 이동
                </Link>
                <Projectdiv>
                    테스트입니다.
                    <Buttondiv>
                        업로드하기
                    </Buttondiv>
                    <MainDiv>
                        <EachDiv>
                            
                        </EachDiv>
                        <EachDiv></EachDiv>
                        <EachDiv></EachDiv>
                        <Eachtext>안녕하세요.</Eachtext>
                    </MainDiv>
                </Projectdiv>
            </Container>
        </>
    )
}

export default Project;