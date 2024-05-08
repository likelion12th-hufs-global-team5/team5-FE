/*import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;
`;

const Text=styled.p`
    margin:30px auto;
    color:blue;
    font-weight:700;
`;
const Curriculum=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Curriculum</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
                <Link to={'/curriculumUpload'}>
                    커리큘럼 업로드 페이지
                </Link>
                <Link to={'/curriculumDetail'}>
                    커리큘럼 디테일 페이지
                </Link>
            </Container>
        </>
    )
}

export default Curriculum
*/

// Curriculum.js
import React from "react";
import { Link } from "react-router-dom";
import SessionBar from "../components/Sessionbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const CurriculumBox = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: rgba(211, 211, 211, 0.7); // 투명한 밝은 회색
  border-radius: 10px; // 둥근 모서리
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; // 상단과 하단의 padding 제거
`;
const Curriculumtext = styled.p`
  margin-top: 77px;
  margin-bottom: 25px;
  color: white;
  font-weight: 700;
  font-size: 45px;
`;
const Curriculumsubtext = styled.p`
  margin-bottom: 88px;
  font-size: 13px;
  color: white;
`;
// 공통파트
const CommoncurBox = styled.div`
  background-color: rgba(0, 0, 0, 0); // 투명한 배경
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  position: relative; // 선을 위한 포지셔닝
`;
const CommonTitle = styled.p`
  color: #fe5826;
  font-weight: bold;
  padding-left: 45px;
  padding-bottom: 20px;
  text-align: left;
  font-size: 25px;
  margin: 0 0 10px 0; // 타이틀 아래 여백
`;
const Commonsubtitle = styled.p`
  color: #fe5826;
  text-align: left;
  padding-left: 45px;
  font-size: 14px;
  margin: 0 0 10px 0; // 타이틀 아래 여백
`;
const Commonline = styled.div`
  position: absolute;
  left: 20px; // 선의 위치 조정
  top: 10px;
  bottom: 10px;
  width: 5px; // 선의 두께
  background-color: #fe5826; // 선의 색상
`;

const CommonsessionContainer = styled.div`
  padding-left: 40px; // 선으로부터의 간격
`;
//위에는 css 관련//
const Curriculum = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/curriculumDetail");
  };

  const handleUploadClick = () => {
    navigate("/curriculumUpload");
  };

  return (
    <>
      <Container>
        <Header />
        <CurriculumBox>
          <Curriculumtext>Curriculum</Curriculumtext>
          <Curriculumsubtext>운영진만 업로드가 가능합니다.</Curriculumsubtext>
          <CommoncurBox>
            <CommonTitle>공통</CommonTitle>
            <Commonsubtitle>
              3/18 ~ 5/4 공통 파트 세션을 진행했습니다.
            </Commonsubtitle>
            <Commonline></Commonline>
            <CommonsessionContainer>
              <SessionBar
                label="Github Session"
                onLabelClick={handleDetailClick}
                onButtonClick={handleUploadClick}
              />
              <SessionBar
                label="FE - Session : HTML, CSS, JavaScript"
                onLabelClick={handleDetailClick}
                onButtonClick={handleUploadClick}
              />
              <SessionBar
                label="BE - Session : Django 기초 restful api&ERD"
                onLabelClick={handleDetailClick}
                onButtonClick={handleUploadClick}
              />
              <SessionBar
                label="PM/PD - Session : 노션으로 서비스 기획하기+ui/ux 디자인"
                onLabelClick={handleDetailClick}
                onButtonClick={handleUploadClick}
              />
            </CommonsessionContainer>
          </CommoncurBox>
        </CurriculumBox>
      </Container>
    </>
  );
};

export default Curriculum;
