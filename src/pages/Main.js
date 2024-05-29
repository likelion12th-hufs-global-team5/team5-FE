import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { userLogin,userLogout} from '../redux/userSlice';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import Header from '../components/Header';
import Stars from '../components/Stars';
import Footer from '../components/Footer';
import Circle from '../components/Circle';


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
    const dispatch=useDispatch();
    
    // 화면 로드 시 로그인 상태 확인
    // useEffect(()=>{
    //     // 서버에서 로그인 여부를 확인하고 redux 상태 업데이트
    //     // 예시 코드 : 서버에서 로그인 여부 확인하는 api 호출
    //     // 이 부분은 서버와의 통산을 통해 실제로 구현되어야 합니다.
    //     const checkLoginStatus=async()=>{
    //         try{
    //             const response=await fetch()
    //         }
    //     }
    // })

    // 쿠키
    const [isLoggedIn, setIsLoggedIn]=useState(Cookies.get('isLoggedIn')==='true');

    // 로컬스토리지
    // const [inputValue,setInputValue]=useState('');

    // useEffect(()=>{
    //     const storedValue=localStorage.getItem('inputValue');
    //     if(storedValue){
    //         setInputValue(storedValue);
    //     }
    // },
    // 빈 배열을 전달하여 페이지가 로드될 때 한 번만 실행되도록함
    // []);

    // 로그인 버튼 클릭 시 로그인 상태를 변경하고 쿠키를 설정 -> 이거는 로그인 페이지에서 선언하기
    const handleLogin=()=>{
        setIsLoggedIn(true);
        Cookies.set('isLoggedIn','true');
    };

    const handleLogout=()=>{
        setIsLoggedIn(false);
        Cookies.remove('isLoggedIn');
    }

    // const handleClick = () => {
    //     if (isLoggedIn) {
    //         onLogout(()=>{
    //           setIsLoggedIn(false);
    //           Cookies.remove('isLoggedIn');
    //         });
    //     } else {
    //         onLogin(()=>{
    //           setIsLoggedIn(true);
    //         //   Cookies.set('isLoggedIn','true');
    //         });
    //     }
    // };

    return(
        <>
            <Container>
                <Header 
                    isLoggedIn={isLoggedIn} 
                    onLogin={handleLogin} 
                    onLogout={handleLogout}
                    // onClick={handleClick}
                    // {isLoggedIn?
                    //     onclick={handleLogout}:onclick={handleLogin}
                    // }
                    />
                <Circle styled={{ zIndex: 10 }}/>
                <Stars />
                <Footer />
            </Container> 
        </>
    )
}

export default Main;