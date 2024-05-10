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

    color:#fff;
`;

const Text=styled.p`
    color:#FE5826;
    font-weight:700;

    margin:30px auto;

    &:hover{
    background-color:white;
    color:#FE5826;
    }
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 549px;

    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    padding-top:77px;
    padding-right:77px;
    padding-left: 77px;
    display: flex;
`;

const MainImage=styled.div`
    width :300px;
    height :300px;
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    background-size: cover;
    background-position: top;
`;

const AllDiv=styled.div`
    display:flex;
    flex-direction :column;
`;

const InputService=styled.input`
    padding:15 10px;
    width:400px;
    margin-left: 50px;
    color:white;
    background-color: transparent;
    font-size:24px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 3px solid white;
    outline:none;
    margin-bottom: 15px;
    padding-bottom:15px;
    padding-left:10px;

`;

const ButtonContainer = styled.div`
    display: flex;
    width: 423px;
    margin-left: 50px;
`;


const Button=styled.button`
    flex-grow: 1;
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 7px;
    margin-top:15px;

    &:hover{
    background-color:#FE5826;
    color:white;
}
`;

const WriteDetails=styled.input`
    width: 638px;
    height: 171px;
    border-radius: 15px;
    color:white;
    font-size:18px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
    background-color:rgba(255,255,255,0.5);
    margin-left: 50px;
    margin-top: 15px;
    margin-bottom: auto;
    box-sizing: border-box;
    display:flex;
    align-items: flex-start;
    text-align: left;
    vertical-align: top;

`;

const UploadButton=styled.button`
    width : 195px;
    height : 65px;
    background-color:rgba(255,255,255,0.19);
    border-radius:15px;
    color:white;
    text-align:center;
    font-size:28px;
    font-weight : 700;
    font-family: "Noto+Sans+KR", sans-serif;
    margin-top: 27px;
    margin-bottom: 77px;
    margin-left: 496px;

    &:hover{
        background-color:white;
        color:#FE5826;
    }
`;



const ProjectUpload=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Project upload page</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Projectdiv>
                    <MainImage>
                        
                    </MainImage>
                    <AllDiv>
                        <InputService type="text" placeholder="서비스명을 작성해주세요.(최대 10글자)" />
                        <ButtonContainer>
                            <Button>미니프로젝트</Button>
                            <Button>해커톤프로젝트</Button>
                            <Button>개인프로젝트</Button>
                        </ButtonContainer>
                        <WriteDetails type="text" placeholder="프로젝트 소개를 작성해주세요. (최대 200글자)" />
                        <Link to={'/project'} className='link'>
                            <UploadButton>
                                업로드하기
                            </UploadButton>
                        </Link>
                    </AllDiv>
                </Projectdiv>
                <Footer />
            </Container>
        </>
    )
}

export default ProjectUpload;