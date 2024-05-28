import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CurriculumDetail = () => {
  const query = useQuery();
  const id = query.get("id");
  const url = `/sessions/detail/${id}/`;
  const [sessionDetail, setSessionDetail] = useState({
    sessionName: "임시 Title 입니다",
    url: "임시 URL 입니다",
    sessionIntro: "임시 세션 Detail 내용입니다",
  });

  useEffect(() => {
    if (id) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("오류났어용");
          }
          return res.json();
        })
        .then((data) => {
          setSessionDetail(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [id, url]);

  console.log("전달받은 id:", id);
  console.log(sessionDetail);

  const displayUrl = sessionDetail.url
    ? sessionDetail.url
    : "url이 입력되지 않았습니다.";
  const displayIntro = sessionDetail.sessionIntro
    ? sessionDetail.sessionIntro
    : "내용이 입력되지 않았습니다";

  if (!sessionDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header />
      <CurriculumBox>
        <CloseButton to="/curriculum">
          <FaTimes />
        </CloseButton>
        <Title>{sessionDetail.sessionName}</Title>
        <StyledHr />
        <URL>{displayUrl}</URL>
        <Detail>{displayIntro}</Detail>
      </CurriculumBox>
      <Footer />
    </Container>
  );
};

export default CurriculumDetail;
