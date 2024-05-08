import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Circle from '../components/Circle';

import RandomStars from '../components/RandomStars';


const Container=styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    align-items:center;

    justify-content: space-evenly;
    
    flex-wrap: wrap;
    gap: 30px;
    overflow: hidden;
`;

const Main = () => {
    
    return(
        <>
            <Container>
                <Header />
                <Circle />
                <Footer />
                {/* <RandomStars /> */}
            </Container> 
        </>
    )
}

export default Main;