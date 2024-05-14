import React from 'react';
import styled from 'styled-components';

const LogoText = styled.p`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.english};
  font-style: ${({ theme }) => theme.fonts.style};
  letter-spacing: ${({ theme }) => theme.fonts.logoLetterSpace};

  .hufs {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.logo};
  }

  .lion {
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: ${({ theme }) => theme.fontSize.logo};
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = () => {
  return (
    <>
      <LogoText>
        <span className='hufs'>HUFS</span>
        <span className='lion'>LION</span>
      </LogoText>
    </>
  );
};

export default Logo;
