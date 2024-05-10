import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
    padding-top:50px;
    padding-right:77px;
`;

const Buttondiv=styled.button`
    width : 195px;
    height : 65px;
    background-color:rgba(255,255,255,0.19);
    border-radius:15px;
    color:white;
    text-align:center;
    float:right;
    font-size:28px;
    font-weight : 700;
    font-family: "Noto+Sans+KR", sans-serif;

    &:hover{
        background-color:white;
        color:#FE5826;
    }
`;
 
const ImageContainerSet = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 115px;
    margin-left: 77px;
`;

const ImageContainer=styled.div`
    position: relative;
`;

const EachDiv=styled.div`
    width : 250px;
    height : 250px;
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    position:relative;
`;

const TextBelowImageContainer = styled.div`
    text-align: center;
`;

const TextBelowImage=styled.p`
    color:white;
    font-size:50px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
`;

const Rectangularinimg=styled.div`
    width : 110px;
    height : 50px;
    border-radius:15px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left:20px;
    color:white;
    font-size:15px;
    font-weight : 400;
    font-family: "Noto+Sans+KR", sans-serif;
    line-height: 50px;
    background-color:rgba(254,58,26,0.75);

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
;                <Projectdiv>
                    <Buttondiv>
                        <Link to={'/projectUpload'} className='link'>
                            업로드하기
                            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                            <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>    
                        </Link>
                    </Buttondiv>
                    <ImageContainerSet>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    5팀최고
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                    </ImageContainerSet>


                    <ImageContainerSet>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    5팀최고
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    5팀최고
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                    </ImageContainerSet>


                    <ImageContainerSet>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                        
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                        <ImageContainer>
                            <EachDiv>
                                <Rectangularinimg>
                                    해커톤프로젝트
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </Rectangularinimg>
                            </EachDiv>
                            <TextBelowImageContainer>
                                <TextBelowImage>
                                    안녕하세요.
                                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                                </TextBelowImage>
                            </TextBelowImageContainer>
                        </ImageContainer>
                    </ImageContainerSet>                                        
                </Projectdiv>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Project;