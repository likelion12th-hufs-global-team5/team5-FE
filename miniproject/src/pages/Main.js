import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import Header from '../components/Header';
import Stars from '../components/Stars';
import Footer from '../components/Footer';
import Circle from '../components/Circle';

import CheckLoginStatus from '../cookie/CheckLoginStatus';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    align-items:center;

    justify-content: space-evenly;
    
    flex-wrap: wrap;
    /* gap: 30px; */
    gap:5vh;
    overflow: hidden;
`;

const Main = () => {
    // 쿠키
    const [isLoggedIn, setIsLoggedIn]=useState(Cookies.get('isLoggedIn')==='true');

    // 로컬스토리지
    const [inputValue,setInputValue]=useState('');

    useEffect(()=>{
        const storedValue=localStorage.getItem('inputValue');
        if(storedValue){
            setInputValue(storedValue);
        }
    },
    // 빈 배열을 전달하여 페이지가 로드될 때 한 번만 실행되도록함
    []);
    
    // input 값 변경될 때마다 상태 업데이트 및 로컬 스토리지에 저장
    const handleChange=(event)=>{
        const value=event.target.value;
        setInputValue(value);
        localStorage.setItem('inputValue',value);
    };

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
                <Header 
                    isLoggedIn={isLoggedIn} 
                    onLogin={handleLogin} 
                    onLogout={handleLogout}
                    
                    />
                {/* 테스트용 코드 */}
                {/* <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='test input localStorage'
                />
                <p>Test Input value : {inputValue}</p> */}
                <Circle styled={{ zIndex: 10 }}/>
                <Stars />
                <Footer />
                <CheckLoginStatus />
            </Container> 
        </>
    )
}

export default Main;