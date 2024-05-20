/*import React from "react";
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
*/
import React, { useEffect, useState } from "react";
import SessionBar from "../components/Sessionbar";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

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
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 10px;
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

const CommoncurBox = styled.div`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;

const CommonsessionContainer = styled.div`
  padding-left: 40px;
`;

const CommonTitle = styled.p`
  color: #fe5826;
  font-weight: bold;
  padding-left: 45px;
  padding-bottom: 20px;
  text-align: left;
  font-size: 25px;
  margin: 0 0 10px 0;
`;

const Commonsubtitle = styled.p`
  color: #fe5826;
  text-align: left;
  padding-left: 45px;
  font-size: 14px;
  margin: 0 0 10px 0;
`;

const Commonline = styled.div`
  position: absolute;
  left: 20px;
  top: 10px;
  bottom: 10px;
  width: 5px;
  background-color: #fe5826;
`;

const PartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 57px;
  padding-bottom: 77px;
`;

const Parttext = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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
  margin-top: 10px;
`;

const Hackerthon = styled.p`
  justify-content: center;
  color: #fe5826;
  font-weight: bold;
  text-align: left;
  font-size: 25px;
`;

const Curriculum = () => {
  const [sessions, setSessions] = useState([
    /* 임시 데이터들*/
    {
      id: 1,
      session_id: 1,
      sessionName: "Github",
      part: "공통",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:21:04.321658Z",
    },
    {
      id: 2,
      session_id: 2,
      sessionName: "FE - Session: HTML, CSS, JavaScript",
      part: "공통",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:22:14.938621Z",
    },
    {
      id: 3,
      session_id: 3,
      sessionName: "BE - Session: Django 기초 restful api&ERD",
      part: "공통",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:22:48.783744Z",
    },
    {
      id: 4,
      session_id: 4,
      sessionName: "PM/PD - Session: 노션으로 서비스 기획하기+ui/ux 디자인",
      part: "공통",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:23:43.553687Z",
    },
    {
      id: 5,
      session_id: 5,
      sessionName: "React 기초",
      part: "FE",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:25:33.479900Z",
    },
    {
      id: 6,
      session_id: 6,
      sessionName: "React 심화 & 해커톤 대비",
      part: "FE",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:25:51.430047Z",
    },
    {
      id: 7,
      session_id: 7,
      sessionName: "Django restframework(DRF)",
      part: "BE",
      url: null,
      sessionIntro: "",
      created_at: "2024-05-11T10:26:18.502274Z",
    },
    {
      id: 8,
      session_id: 8,
      sessionName: "Django 회원가입/로그인 & 해커톤 대비 세션",
      part: "BE",
      url: "https://www.test8.com",
      sessionIntro: "This is a test8 post",
      created_at: "2024-05-11T10:26:49.010195Z",
    },
  ]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          "https://team5-fe.vercel.app/session/all" /*url 틀렸음.. 그래서 F12로 볼 때 오류남.*/,
          {
            headers: {
              Authorization: "usertoken",
            },
          }
        );
        if (response.status === 200) {
          const data = response.data.map((session) => ({
            id: session.id,
            session_id: session.session_id,
            sessionName: session.sessionName,
            part: session.part,
            url: session.url,
            sessionIntro: session.sessionIntro,
            created_at: session.created_at,
          }));
          setSessions(data);
        } else {
          console.error("Failed to fetch sessions");
        }
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchSessions();
  }, []);

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
              {sessions
                .filter((session) => session.part === "공통")
                .map((session) => (
                  <SessionBar
                    key={session.id}
                    label={session.sessionName}
                    labelTo="/curriculumDetail"
                    buttonTo="/curriculumUpload"
                  />
                ))}
            </CommonsessionContainer>
          </CommoncurBox>
          <PartBox>
            <div>
              <Parttext>
                <PartTitle>FE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              {sessions
                .filter((session) => session.part === "FE")
                .map((session) => (
                  <SessionBar
                    key={session.id}
                    label={session.sessionName}
                    labelTo="/curriculumDetail"
                    buttonTo="/curriculumUpload"
                    width="400px"
                  />
                ))}
            </div>
            <div>
              <Parttext>
                <PartTitle>BE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              {sessions
                .filter((session) => session.part === "BE")
                .map((session) => (
                  <SessionBar
                    key={session.id}
                    label={session.sessionName}
                    labelTo="/curriculumDetail"
                    buttonTo="/curriculumUpload"
                    width="400px"
                  />
                ))}
            </div>
          </PartBox>
          <Hackerthon>HACKERTHON</Hackerthon>
          <PartBox>
            <div>
              <Parttext>
                <PartTitle>FE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              {sessions
                .filter((session) => session.part === "FE")
                .map((session) => (
                  <SessionBar
                    key={session.id}
                    label={session.sessionName}
                    labelTo="/curriculumDetail"
                    buttonTo="/curriculumUpload"
                    width="400px"
                  />
                ))}
            </div>
            <div>
              <Parttext>
                <PartTitle>BE</PartTitle>
                <Partsubitle>파트 선택 후 개별 세션 입니다.</Partsubitle>
              </Parttext>
              {sessions
                .filter((session) => session.part === "BE")
                .map((session) => (
                  <SessionBar
                    key={session.id}
                    label={session.sessionName}
                    labelTo="/curriculumDetail"
                    buttonTo="/curriculumUpload"
                    width="400px"
                  />
                ))}
            </div>
          </PartBox>
        </CurriculumBox>
        <Footer />
      </Container>
    </>
  );
};

export default Curriculum;
