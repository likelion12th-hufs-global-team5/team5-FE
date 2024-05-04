import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Container=styled.div`
    display:flex;
    flex-direction:column;


`;
const Main = () => {

    return(
        <>
            <Container>
                <Header />
                <Footer />
            </Container>
            
        </>
    )
}

export default Main;