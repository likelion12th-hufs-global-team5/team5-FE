import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    color:#fff;
`;

const Text=styled.p`
    color:blue;
    font-weight:700;

    margin:30px auto;
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
            </Container>
        </>
    )
}

export default ProjectUpload;