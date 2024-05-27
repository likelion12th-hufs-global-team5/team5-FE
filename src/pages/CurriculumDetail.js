import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #fff;

  flex-wrap: wrap;
  gap: 5vw;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const CurriculumBox = styled.div`
  width: 1250px;
  height: 550px;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 77px;
  margin-bottom: 77px;
`;

const CloseButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  color: black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-decoration: none;
  margin-top: 27px;
  margin-left: 95%;
`;

const StyledHr = styled.hr`
  border: none;
  height: 5px;
  background-color: white;
  margin-left: 77px;
  width: 700px;
`;
const Title = styled.p`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-weight: 700;
  font-size: 44px;
  text-align: left;
  margin: 50px 0 20px 77px;
  max-width: 100%;
`;

const URL = styled.p`
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  width: 1100px;
  height: 40px;
  padding: 10px 20px;
  margin: 15px 77px 15px 77px;
  overflow-y: auto;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;
const Detail = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 15px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  width: 1100px;
  height: 200px;
  padding: 27px 20px;
  margin: 5px 77px 15px 77px;
  white-space: pre-line;
  line-height: 1.5;
`;

const CurriculumDetail = () => {
  return (
    <>
      <Container>
        <Header />
        <CurriculumBox>
          <CloseButton to="/curriculum">
            <FaTimes />
          </CloseButton>
          <Title>Github Session</Title>
          <StyledHr />
          <URL>
            https://velog.io/@hufsglobal09/12th-Session-03.-Django-%EA%B8%B0%EC%B4%88restful-apiERD-%EC%84%A4%EA%B3%84
          </URL>
          <Detail>
            🦁멋쟁이사자차럼 12기 백엔드 기초 세션🦁
            <br />
            화면에 보이지 않는 백엔드의개발은 어떻게 진행되는 걸까요? 🤔
            <br />
            어디서부터 어떻게 시작해야될지 막막하지 않으신가요..? 🥺
            <br />
            그래서 멋쟁이 선배 사자 나연님께서 장고 기초 세팅부터 프로젝트
            실습까지 포함된 백엔드 기초 세션을 준비해주셨습니다~!🥴
          </Detail>
        </CurriculumBox>
        <Footer />
      </Container>
    </>
  );
};

export default CurriculumDetail;
