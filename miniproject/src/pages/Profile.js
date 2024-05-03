import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;
const Profile=()=>{

    return(
        <>
            <Header />
            <Text>test Text - Profile</Text>
            <Link to={'/'}>
                Main 이동
            </Link>
        </>
    )
}

export default Profile