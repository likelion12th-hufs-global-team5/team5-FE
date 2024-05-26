import React, { useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Circle from '../components/Circle';

import RandomStars from '../components/RandomStars';

import CheckLoginStatus from '../cookie/CheckLoginStatus';


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
    const [isLoggedIn, setIsLoggedIn]=useState(Cookies.get('isLoggedIn')==='true');
    

    // 로그인 버튼 클릭 시 로그인 상태를 변경하고 쿠키를 설정 -> 이거는 로그인 페이지에서 선언하기
    const handleLogin=()=>{
        setIsLoggedIn(true);
        Cookies.set('isLoggedIn','true');
    };

    const handleLogout=()=>{
        setIsLoggedIn(false);
        Cookies.remove('isLoggedIn');
    }
    return(
        <>
            <Container>
                <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout}/>
                <Circle />
                <Footer />
                {/* <RandomStars /> */}
                <CheckLoginStatus />
            </Container> 
        </>
    )
}

export default Main;