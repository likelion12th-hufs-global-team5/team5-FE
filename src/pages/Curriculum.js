import React from "react";
import SessionBar from "../components/Sessionbar";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
//link는 sessionbar에서 처리
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  flex-wrap: wrap;
  gap: 5vh;
`;
const CurriculumBox = styled.div`
  width: 1000px;
  height: 1100px;
  background-color: rgba(255, 255, 255, 0.19); // 투명한 밝은 회색
  border-radius: 10px; // 둥근 모서리
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 77px;
  margin-bottom: 77px;
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

  position: relative; // 선을 위한 포지셔닝
`;
const CommonsessionContainer = styled.div`
  padding-left: 40px; // 선으로부터의 간격
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

//중간 FE/BD 파트 나뉘는 부분
const PartBox = styled.div`
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  gap: 20px; // 요소 사이 간격
  padding-top: 57px;
  padding-bottom: 77px;
  //border: 2px solid white; // 테두리 스타일, 두께, 색상 추가
`;
const Parttext = styled.div`
  display: flex;
  //justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  gap: 20px; // 요소 사이 간격
`; // Title과 subtitle 가로나열 용도
const PartTitle = styled.p`
  color: #fe5826;
  font-weight: bold;
  text-align: left;
  font-size: 25px;
  padding-left: 5px;
`;
const Partsubitle = styled.p`
  color: #fe5826;
  text-align: left;
  font-size: 14px;
  margin-top: 10px; // 타이틀과의 수직 간격 조정
`;

// Hackerthon 관련
// title과 subtitile은 이전의 Parttext,PartTitle,Partsubitle
// PartBox도 재사용(요소 가로 배열 용도)
const Hackerthon = styled.p`
  justify-content: center;
  color: #fe5826;
  font-weight: bold;
  text-align: left;
  font-size: 25px;
`;

//위에는 css 관련//
const Curriculum = () => {
  // const navigate = useNavigate();

  //  const handleDetailClick = () => {
  //    navigate("/curriculumDetail");
  //  };

  //  const handleUploadClick = () => {
  //    navigate("/curriculumUpload");
  //  };

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
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
              />
              <SessionBar
                label="FE - Session : HTML, CSS, JavaScript"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
              />
              <SessionBar
                label="BE - Session : Django 기초 restful api&ERD"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
              />
              <SessionBar
                label="PM/PD - Session : 노션으로 서비스 기획하기+ui/ux 디자인"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
              />
            </CommonsessionContainer>
          </CommoncurBox>
          <PartBox>
            <div>
              <Parttext>
                <PartTitle>FE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              <SessionBar
                label="React 기초"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
              <SessionBar
                label="React 심화 & 해커톤 대비"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
            </div>
            <div>
              <Parttext>
                <PartTitle>BE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              <SessionBar
                label="Django restframework (DRF)"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
              <SessionBar
                label="django 회원가입/로그인 & 해커톤 대비 세션"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
            </div>
          </PartBox>
          <Hackerthon>HACKERTHON</Hackerthon>
          <PartBox>
            <div>
              <Parttext>
                <PartTitle>FE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              <SessionBar
                label="React 기초"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
              <SessionBar
                label="React 심화 & 해커톤 대비"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
            </div>
            <div>
              <Parttext>
                <PartTitle>BE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              <SessionBar
                label="Django restframework (DRF)"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
              <SessionBar
                label="django 회원가입/로그인 & 해커톤 대비 세션"
                labelTo="/curriculumDetail"
                buttonTo="/curriculumUpload"
                width="400px"
              />
            </div>
          </PartBox>
        </CurriculumBox>
        <Footer />
      </Container>
    </>
  );
};

export default Curriculum;
