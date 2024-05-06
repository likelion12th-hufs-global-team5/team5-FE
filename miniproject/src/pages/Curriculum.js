import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;
`;

const Text=styled.p`
    margin:30px auto;
    color:blue;
    font-weight:700;
`;
const Curriculum=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Curriculum</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Link to={'/curriculumUpload'}>
                    커리큘럼 업로드 페이지
                </Link>
                <Link to={'/curriculumDetail'}>
                    커리큘럼 디테일 페이지
                </Link>
            </Container>
        </>
    )
}

export default Curriculum