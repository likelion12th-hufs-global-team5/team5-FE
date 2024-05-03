import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    flex-direction:column;
`;
const Text=styled.p`
    font-weight:700;
    color:red;
`;
const Main = () => {

    return(
        <>
            <Container>
                <Text>test Text - Main </Text>
                <Link to={'/login'}>Login 이동</Link>
                <Link to={'/joinMembership'}>Join 이동</Link>
                <Link to={'/project'}>Project 이동</Link>
                <Link to={'/curriculum'}>curriculum 이동</Link>
                <Link to={'/member'}>Member 이동</Link>
                <Link to={'/profile'}>Profile 이동</Link>
            </Container>
            
        </>
    )
}

export default Main;