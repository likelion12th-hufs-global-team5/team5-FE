import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Circle from '../components/Circle';

import RandomStars from '../components/RandomStars';


const Container=styled.div`
    display:flex;
    flex-direction:column;

    align-items:center;

    // justify-contents:space-between;
    justify-content: space-evenly;
    
    // justify-contents:center;
    justify-content: space-between;
    // flex:1;
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