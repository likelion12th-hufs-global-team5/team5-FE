import React, { useEffect,useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie'

import { userLogin, userLogout } from '../redux/userSlice';
import Logo from './Logo';

import { BsCaretDownFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  /* 변경된 값 */
  /* margin: 3.188vw auto 5.938vw auto;  */
  flex-wrap: wrap;
  gap: 2.813vw; /* 변경된 값 */

  white-space: nowrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  gap: 0.938vw; /* 변경된 값 */
  padding: 1.313vw 1.688vw; /* 변경된 값 */
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.english};
  font-style: ${({ theme }) => theme.fonts.style};
  letter-spacing: ${({ theme }) => theme.fonts.logoLetterSpace};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.headerFont};

  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    transition: color 0.2s;
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;
    border-color: transparent;
    border-radius: 25px 25px 5px 5px; /* 변경된 값 */
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: background-color 0.2s;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.055vw; /* 변경된 값 */

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const UserImg = styled.div`
  width: 3vw; /* 변경된 값 */
  height: 3vw; /* 변경된 값 */
  border-radius: 50%; /* 변경된 값 */
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const LoginButton = styled.button`
  padding: 0.4vw 1.5vw; /* 변경된 값 */
  font-size: ${({ theme }) => theme.fontSize.login};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 1vw; /* 변경된 값 */
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.english};
  font-style: ${({ theme }) => theme.fonts.login};
  letter-spacing: ${({ theme }) => theme.fonts.logoLetterSpace};

  @media screen and (max-width: 768px) {
    margin-top: 1.055vw; /* 변경된 값 */
  }
`;

const Header = ({isLoggedIn, onLogin, onLogout}) => {
  return (
    <>
      <Container>
        <Link to='/'>
          <Logo />
        </Link>
        <Link to={'/project'}>
          <Select>
            PROJECT
            <BsCaretDownFill />
          </Select>
        </Link>
        <Link to={'/curriculum'}>
          <Select>
            CURRICULUM
            <BsCaretDownFill />
          </Select>
        </Link>
        <Link to={'/member'}>
          <Select>
            MEMBER
            <BsCaretDownFill />
          </Select>
        </Link>
        <Link to={'/profile'}>
          <Select>
            PROFILE
            <BsCaretDownFill />
          </Select>
        </Link>
        <User>
          <UserImg />
          <Link to={'/login'}>
            <LoginButton
              // isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout}
            >
              {isLoggedIn ? 'LOGOUT':'LOGIN'}
            </LoginButton>
          </Link>
        </User>
      </Container>
    </>
  );
};

export default Header;
