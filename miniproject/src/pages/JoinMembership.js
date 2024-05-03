import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;

const JoinContainer=styled.div`
    display:flex;
    flex-direction:column;
`;
const JoinInput=styled.input`
    padding:10px;
`;

const JoinSelectButton=styled.button`
    color:white;
    background-color:#f3f;
    border:none;
    margin-top:10px;
`;

const JoinMembership=()=>{

    return(
        <>
            <Header />
            <Text>test Text - JoinMembership</Text>
            <Link to={'/'}>
                Main 이동
            </Link>
            <JoinContainer>
                회원가입
                <br />
                이름
                <JoinInput placeholder='이름을 작성해주세요.'/>
                학번
                <JoinInput placeholder='학번을 작성해주세요.'/>
                ID
                <JoinInput placeholder='아이디를 작성해주세요.'/>
                PW
                <JoinInput placeholder='비밀번호를 작성해주세요.'/>
                <JoinInput placeholder='비밀번호를 다시 작성해주세요.'/>
                활동
                <JoinSelectButton>운영진</JoinSelectButton>
                <JoinSelectButton>아기사자</JoinSelectButton>
            </JoinContainer>
        </>
    )
}

export default JoinMembership