import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Password from '../components/Password';
import Footer from '../components/Footer';
import {BsPencilFill} from 'react-icons/bs'

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    flex-wrap: wrap;
    gap:5vw;

    /* width: 100%; */
`;
const ContentDiv=styled.div`
    background:rgba(255,255,255,0.19);
    width: 90%;

    border-radius: 35px;

    padding: 2vw;

    
`;
const UserImage=styled.image`
    width: 30%;
    height: 30%;
    src: 'https://i.pinimg.com/564x/3f/0e/cb/3f0ecb91c433030f5a413795c41a1d56.jpg';
`;
const Contant=styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    gap: 1.3vw;

    .introduce{
        display: flex;
        flex-direction: column;
        align-items: start;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap: 0.5vw;

        color:${({theme})=>theme.colors.white};
    }

`
const ContentHeader=styled.div`
    display: flex;
    flex-direction:row;
    color:${({theme})=>theme.colors.white};
    align-items: baseline;

    flex-wrap: wrap;
    gap: 2vw;

    .userName{
        font-size: ${({theme})=>theme.fontSize.memberContentName};
        font-family: ${({theme})=>theme.fonts.korean};
    }
    .year{
        font-size: ${({theme})=>theme.fontSize.memberContentYearPosition};
        font-family: ${({theme})=>theme.fonts.korean};
    }
`
const EditUserPositionDiv=styled.div`
    padding-left: 0.5vw;
    border-bottom: 0.5vw solid ${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.white};

    font-size:${({theme})=>theme.fontSize.profilePosition};
    font-family: ${({theme})=>theme.fonts.korean};

    &:hover{
        color:${({theme})=>theme.colors.mainColor};
        border-bottom: 0.5vw solid ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }

    &:active{
        color:${({theme})=>theme.colors.mainColor};
        border-bottom: 0.5vw solid ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }
    &:focus{
        color:${({theme})=>theme.colors.mainColor};
        border-bottom: 0.5vw solid ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }
    .icon{
        width:1vw;
        height:1vw;
    }
    button{
        
        color:${({theme})=>theme.colors.white};

        &:hover{
        color:${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
        }
        &:active{
            color:${({theme})=>theme.colors.mainColor};
            transition: all 0.1s;
        }
        &:focus{
            color:${({theme})=>theme.colors.mainColor};
            transition: all 0.1s;
        }
    }
`;

const EditUserPosition=styled.input`
    border: none;
    outline: none;
    background-color: transparent;

    color:${({theme})=>theme.colors.white};

    font-size:${({theme})=>theme.fontSize.profilePosition};
    font-family: ${({theme})=>theme.fonts.korean};
`;
const AddUserIntroduce=styled.textarea`
    padding:1.5vw;
    color:${({theme})=>theme.colors.white};
    background-color: rgba(255,255,255,0.19);
    
    border: none;
    outline: none;
    border-radius: 25px;

    width:100%;

    resize:none;

    &:hover{
        border: 0.3vw solid white ;
        transition: all 0.1s;
    }
    &:active{
        background-color: rgba(254,88,38,0.19);
        color:${({theme})=>theme.colors.mainColor};
        border: 0.3vw solid ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }
`;
const EditPasswordDiv=styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;

    flex-wrap: wrap;
    gap:0.5vw;

    color:${({theme})=>theme.colors.white};
    font-weight: bold;
    font-size: ${({theme})=>theme.fontSize. profileText};

    /* flex-wrap: wrap;
    gap:2vw; */
`;
const EditButton=styled.button`
    background-color: rgba(255,255,255,0.19);
    color:${({theme})=>theme.colors.white};

    border-radius: 15px;
    padding: 1vw;

    font-size: ${({theme})=>theme.fontSize.profileButton};
    font-weight: bold;
    &:hover{
        border: 0.3vw solid white ;
        transition: all 0.1s;
    }
    &:active{
        background-color: white;
        color:${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }
`;
const Profile=()=>{

    return(
        <>
            <Container>
                <Header />
                <ContentDiv>
                    <UserImage src='https://i.pinimg.com/564x/3f/0e/cb/3f0ecb91c433030f5a413795c41a1d56.jpg'/>
                    <Contant>
                        <ContentHeader>
                            <span className='userName'>김준영</span>
                            <span className='year'>11기</span>
                            <EditUserPositionDiv>
                                <EditUserPosition placeholder='바꾸실 포지션을 작성해주세요'/>
                                <button type='submit'>
                                    <BsPencilFill className='icon'/>
                                </button>
                            </EditUserPositionDiv>
                        </ContentHeader>
                        <div className='introduce'>
                            한줄소개
                            <AddUserIntroduce placeholder='한줄 소개를 입력해주세요' />
                        </div>
                        <EditPasswordDiv>
                            로그인 정보 수정
                            <Password 
                                firstPlaceHolder={'현재 비밀번호를 입력해주세요'}
                                secondPlaceHolder={'변경하실 비밀번호를 입력해주세요'}
                                />
                        </EditPasswordDiv>
                        <EditButton>수정하기</EditButton>
                    </Contant>
                </ContentDiv>
                <Footer />
            </Container>
        </>
    )
}

export default Profile