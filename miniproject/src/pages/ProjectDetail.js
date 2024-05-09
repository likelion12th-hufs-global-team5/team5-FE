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
    color:blue;
    font-weight:700;

    margin:30px auto;
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 549px;

    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    padding-top:77px;
    padding-right:77px;
`;

const ProjectDetail=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Project - detail page</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Projectdiv>
                    dd
                </Projectdiv>
            </Container>
        </>
    )
}

export default ProjectDetail;