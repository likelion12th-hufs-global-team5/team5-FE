import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
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
`;
const UserImage=styled.image``;
const Contant=styled.div`
    display: flex;
    flex-direction: column;

    color:${({theme})=>theme.colors.white};

    .introduce{
        display: flex;
        flex-direction: column;
        align-items: start;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap: 0.5vw;
    }

`
const ContentHeader=styled.div`
    display: flex;
    flex-direction:row;
`
const EditUserPositionDiv=styled.div`
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
    background-color: rgba(255,255,255,0.19);
    border: none;
    outline: none;
    border-radius: 25px;

    width:100%;

    resize:none;
`;
const EditPasswordDiv=styled.div`
    display: flex;
    flex-direction:column;

    flex-wrap: wrap;
    gap:2vw;
`;
const EditCurrentPassword=styled.input`
    text-align: center;

    border-radius: 50px;
    outline: none;
    border: none;

    background-color: rgba(255,255,255,0.19);

    padding:15px;

    &:hover{
        color:${({theme})=>theme.colors.white};
        border: 0.3vw solid white ;

        transition: all 0.1s;
    }
    &:active{
        color:${({theme})=>theme.colors.mainColor};
        border: 0.3vw solid ${({theme})=>theme.colors.mainColor};
        background-color:rgba(254,88,38,0.19);
        transition: all 0.1s;
    }
`;
const EditNewPassword=styled.input`
    text-align: center;

    border-radius: 50px;
    outline: none;
    border: none;

    background-color: rgba(255,255,255,0.19);

    padding:15px;

    &:hover{
        color:${({theme})=>theme.colors.white};
        border: 0.3vw solid white ;

        transition: all 0.1s;
    }
    &:active{
        color:${({theme})=>theme.colors.mainColor};
        border: 0.3vw solid ${({theme})=>theme.colors.mainColor};
        background-color:rgba(254,88,38,0.19);
        transition: all 0.1s;
    }
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
                    <UserImage />
                    <Contant>
                        <ContentHeader>
                            김준영
                            11기
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
                            <EditCurrentPassword placeholder='현재 비밀번호를 입력해주세요'/>
                            <EditNewPassword placeholder='변경하실 비밀번호를 입력해주세요'/>
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