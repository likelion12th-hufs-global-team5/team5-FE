import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  /* 변경된 값 */
  /* margin: 4.5625vw auto 8.6875vw auto;  */
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) => theme.fonts.english};
  font-size: 1.25vw; /* 변경된 값 */
  cursor: pointer;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2.34375vw; /* 변경된 값 */
  }
`;

const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-right: 7.5vw; /* 변경된 값 */
  font-size: 1.8vw;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5625vw; /* 변경된 값 */
  }

  .icon {
    margin-right: 1.40625vw; /* 변경된 값 */
  }
`;

const Footer = () => {
  const instagramUrl = 'https://www.instagram.com/hufsglobal_likelion/?hl=ko';
  const velogUrl = 'https://velog.io/@hufsglobal09/posts';

  return (
    <>
      <Container>
        <SocialLink onClick={() => { window.open(instagramUrl) }}>
          <BsInstagram className='icon' />
          instagram HUFS GLOBAL
        </SocialLink>
        <SocialLink onClick={() => { window.open(velogUrl) }}>
          <BsVimeo className='icon' />
          velog HUFS GLOBAL
        </SocialLink>
      </Container>
    </>
  );
};

export default Footer;
