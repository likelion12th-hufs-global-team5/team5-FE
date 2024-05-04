import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

import Logo from '../components/Logo';

const LoginContainer=styled.div`
    display:flex;
    flex-direction:column;

    background-color:${({theme})=>theme.backgroundColor.white};

`;
const LoginInput=styled.input`
    padding: 10px;
`;

const Login=()=>{

    return(
        <>
            <Link to={'/'}>
                <Logo />
            </Link>
            <LoginContainer>
                ID <LoginInput placeholder='아이디를 입력해주세요.'/>
                PW <LoginInput placeholder='비밀번호를 입력해주세요.'/>
            </LoginContainer>
            <Link to='/joinMembership'>
                회원가입
            </Link>
        </>
    )
}

export default Login