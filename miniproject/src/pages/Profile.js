import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;
`;

const Text=styled.p`
    color:blue;
    font-weight:700;
`;
const Profile=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Profile</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Footer />
            </Container>
        </>
    )
}

export default Profile