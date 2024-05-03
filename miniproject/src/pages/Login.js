import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;

const LoginContainer=styled.div`
    display:flex;
    flex-direction:column;
`;
const LoginInput=styled.input`
    padding: 10px;
`;

const Login=()=>{

    return(
        <>
            <Header />
            <Text>test Text - Login</Text>
            <Link to={'/'}>
                Main 이동
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