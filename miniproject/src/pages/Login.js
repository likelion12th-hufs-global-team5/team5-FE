import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Circle from '../components/Circle';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    align-items:center;

    margin:25px;

    // .loginLogo{
    //     position:fixed;
    //     // top:50px;
    //     left:50px;
    // }

`;

const LogoCircleDiv=styled.div`
    z-index:1;

    display:flex;
    flex-direction:column;
`;

const LoginContainer=styled.div`
    z-index:5;

    display:flex;
    flex-direction:column;
    text-align:left;

    width:609px;
    height:744px;
    padding:40px;
    
    color:${({theme})=>theme.colors.white};
    // background: rgba(${({ theme }) => theme.backgroundColor.white}, 0.19);
    background:rgba(255,255,255,0.19);
    border-radius:20px;

    .LoginHeader{
        margin-botton:28px;

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

    type:'text';
    margin:30px 0px;
    padding:18px 33px;

    width:517px;
    height:62px;

    border:none;
    border-radius:50px;

    font-size:${({theme})=>theme.fontSize.loginInputText};

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

    // &:hover{
    //     border:solid 4px;

    //     background:rgba(255,255,255,0.19);
    //     border-color:${({theme})=>theme.colors.white};

    //     color:${({theme})=>theme.colors.white};
    // }
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
const Login=()=>{

    return(
        <>
            <Container>
                <LogoCircleDiv>
                    <Link to={'/'}>
                        <Logo styled='position:fixed; top:50px;'/>
                    </Link>
                    <Circle />
                </LogoCircleDiv>
                <LoginContainer>
                    <p className='LoginHeader'>로그인</p><br />
                    <p className='LoginText'>
                        한국외국어대학교 글로벌 캠퍼스<br />
                        멋쟁이사자처럼 대학 홈페이지 입니다.<br />
                    </p>
                    <p id='inputText'>ID</p>
                    <LoginInput placeholder='아이디를 입력해주세요.'/>
                    <p id='inputText'>PW</p>
                    <LoginInput placeholder='비밀번호를 입력해주세요.'/>
                    <LoginButton>Login</LoginButton>
                    <GotoJoinMembership>
                        회원이 아니신가요?
                        <Link to='/joinMembership' className='textGotoJoin'>
                            회원가입
                        </Link>
                    </GotoJoinMembership>
                </LoginContainer>
            </Container>
        </>
    )
}

export default Login;