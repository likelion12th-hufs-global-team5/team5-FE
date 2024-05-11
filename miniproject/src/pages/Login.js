import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LogoCircle from '../components/LogoCircle';

const Container=styled.div`
    display:flex;
    flex-direction:row;

    align-items:center;
	justify-content: center;

    padding:60px;

    flex-wrap: wrap;
    gap: 7vw;
`;

const LoginContainer=styled.div`
    z-index:5;

    display:flex;
    flex-direction:column;
    text-align:left;

    /* width:609px;
    height:744px; */
    width: 40%;
    padding: 2vw;

    padding:40px;
    
    color:${({theme})=>theme.colors.white};
    background:rgba(255,255,255,0.19);
    border-radius:20px;

    .LoginHeader{
        margin-bottom:28px;

        font-size:${({theme})=>theme.fontSize.loginHeader};
        color:${({theme})=>theme.colors.white};
        font-family:${({theme})=>theme.fonts.korean};
        font-weight:${({theme})=>theme.fontWeights.loginHeader};
    }
    .LoginText{
        margin-bottom:82px;

        font-size:${({theme})=>theme.fontSize.loginHeaderText};
        color:${({theme})=>theme.colors.white};
        font-family:${({theme})=>theme.fonts.korean};
        font-weight:${({theme})=>theme.fontWeights.loginText};

        letter-spacing:${({theme})=>theme.fonts.loginTextSpace};
        line-height:${({theme})=>theme.fontLineHeight.loginText};
    }

    #inputText{
        font-size:${({theme})=>theme.fontSize.inputText};
        font-weight:${({theme})=>theme.fontWeights.inputText};
    }
`;
const LoginInput=styled.input`
    display:flex;
    flex-direction:left;

    margin:30px 0px;
    padding:18px 33px;

    width:517px;
    height:62px;

    border:none;
    border-radius:50px;

    font-size:${({theme})=>theme.fontSize.loginInputText};
    /* font-size: 36px; */

    outline:none;

    background:rgba(255,255,255,0.19);
    border-color:${({theme})=>theme.colors.white};

    color:${({theme})=>theme.colors.white};

    &:hover{
        border:solid 4px;

        background:rgba(254,88,38,0.19);
        border-color:${({theme})=>theme.colors.mainColor};

        color:${({theme})=>theme.colors.mainColor};
    }

    &:hover::placeholder {
        color:${({theme})=>theme.colors.mainColor}; /* hover 시 placeholder 색상 변경 */
    }
`;
const LoginButton=styled.button`
    margin-top : 45px;
    width:250.87px;
    height:61.88px;

    background:${({theme})=>theme.backgroundColor.white};
    color:${({theme})=>theme.colors.mainColor};

    border-radius:50px;

    font-family:${({theme})=>theme.fonts.english};
    font-size:${({theme})=>theme.fontSize.buttonFont};
    font-weight:${({theme})=>theme.fontWeights.loginHeader};
    letter-spacing:0.1vw;
    &:hover{
        color: ${({theme})=>theme.colors.white};
        background-color: ${({theme})=>theme.colors.mainColor};
        transition: all 0.2s;
    }
`;
const GotoJoinMembership=styled.div`
    display:flex;
    flex-direction:row;
    // text-align:center;
    justify-content:center;
    
    margin-top:20px;

    color:${({theme})=>theme.colors.white};
    font-family:${({theme})=>theme.fonts.korean};

    .textGotoJoin{
        margin-left:20px;
        font-weight:${({theme})=>theme.fontWeights.gotoJoinMembership};
        color:${({theme})=>theme.colors.white};
    }
`;

const ProjectDiv=styled.div`
    width:300px;
    height:300px;
`;

const Login=()=>{
    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        id:'',
        password:''
    });

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        navigate('/');
    }

    return(
        <>
            <Container>
                <LogoCircle />
                <LoginContainer>
                    <p className='LoginHeader'>로그인</p><br />
                    <p className='LoginText'>
                        한국외국어대학교 글로벌 캠퍼스<br />
                        멋쟁이사자처럼 대학 홈페이지 입니다.<br />
                    </p>
                    <p id='inputText'>ID</p>
                    <LoginInput 
                        type='text'
                        name='id'
                        value={formData.id}
                        onChange={handleInputChange}
                        required
                        placeholder='아이디를 입력해주세요.'
                    />
                    <p id='inputText'>PW</p>
                    <LoginInput 
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder='비밀번호를 입력해주세요.'
                    />
                    <LoginButton
                        type='submit'
                        onClick={handleFormSubmit}
                    >Login</LoginButton>
                    <GotoJoinMembership>
                        회원이 아니신가요?
                        <Link to='/joinMembership' className='textGotoJoin'>
                            회원가입
                        </Link>
                    </GotoJoinMembership>
                </LoginContainer>
                <ProjectDiv></ProjectDiv>
            </Container>
        </>
    )
}

export default Login;