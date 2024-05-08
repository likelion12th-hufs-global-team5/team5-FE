import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

import { BsCaretDownFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin: 3.188vw auto 5.938vw auto; /* 변경된 값 */
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
    border-radius: 3.125vw; /* 변경된 값 */
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
  width: 5.938vw; /* 변경된 값 */
  height: 5.938vw; /* 변경된 값 */
  border-radius: 50%; /* 변경된 값 */
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const LoginBtn = styled.button`
  padding: 0.859vw 2.5vw; /* 변경된 값 */
  font-size: ${({ theme }) => theme.fontSize.login};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 1.406vw; /* 변경된 값 */
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.english};
  font-style: ${({ theme }) => theme.fonts.login};
  letter-spacing: ${({ theme }) => theme.fonts.logoLetterSpace};

  @media screen and (max-width: 768px) {
    margin-top: 1.055vw; /* 변경된 값 */
  }
`;

const Header = () => {
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
            <LoginBtn>LOGIN</LoginBtn>
          </Link>
        </User>
      </Container>
    </>
  );
};

export default Header;
