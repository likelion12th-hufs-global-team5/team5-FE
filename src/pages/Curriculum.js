import React, { useEffect, useState } from "react";
import SessionBar from "../components/Sessionbar";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stars from "../components/Stars";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 5vh;
`;

const CurriculumBox = styled.div`
  width: 1000px;
  height: 1150px;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 77px;
  margin-bottom: 77px;
  z-index: 1;
`;

const Curriculumtext = styled.p`
  margin-top: 77px;
  margin-bottom: 25px;
  color: white;
  font-weight: 700;
  font-size: 55px;
  font-family: ${({ theme }) => theme.fonts.english};
`;

const Curriculumsubtext = styled.p`
  margin-bottom: 88px;
  font-size: 13px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.korean};
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
  font-size: 35px;
  margin: 0 0 10px 0;
  font-family: ${({ theme }) => theme.fonts.korean};
`;

const Commonsubtitle = styled.p`
  color: #fe5826;
  text-align: left;
  padding-left: 45px;
  font-size: 14px;
  margin: 0 0 10px 0;
  font-family: ${({ theme }) => theme.fonts.korean};
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
  font-size: 35px;
  padding-left: 5px;
`;

const Partsubitle = styled.p`
  color: #fe5826;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.korean};
`;

const Hackerthon = styled.p`
  justify-content: center;
  color: #fe5826;
  font-weight: bold;
  text-align: left;
  font-size: 50px;
  font-family: ${({ theme }) => theme.fonts.english};
`;

const Curriculum = () => {
  const url = "/sessions/all/";
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("오류났어용");
        }
        return res.json();
      })
      .then((data) => {
        setSessions(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  console.log(sessions);

  const commonSessions = sessions.filter((session) =>
    [1, 2, 3, 4].includes(session.id)
  );
  const feSessions = sessions.filter((session) => [5, 7].includes(session.id));
  const beSessions = sessions.filter((session) => [6, 8].includes(session.id));

  return (
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
            {commonSessions.map((session) => (
              <SessionBar
                key={session.id}
                label={session.sessionName}
                labelTo={`/curriculumDetail?id=${session.id}`}
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
            {feSessions.map((session) => (
              <SessionBar
                key={session.id}
                label={session.sessionName}
                labelTo={`/curriculumDetail?id=${session.id}`}
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
            {beSessions.map((session) => (
              <SessionBar
                key={session.id}
                label={session.sessionName}
                labelTo={`/curriculumDetail?id=${session.id}`}
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
            {feSessions.map((session) => (
              <SessionBar
                key={session.id}
                label={session.sessionName}
                labelTo={`/curriculumDetail?id=${session.id}`}
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
            {beSessions.map((session) => (
              <SessionBar
                key={session.id}
                label={session.sessionName}
                labelTo={`/curriculumDetail?id=${session.id}`}
                buttonTo="/curriculumUpload"
                width="400px"
              />
            ))}
          </div>
        </PartBox>
      </CurriculumBox>

      <Stars />
      <Footer />
    </Container>
  );
};

export default Curriculum;
