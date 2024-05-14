/*
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    color:#fff;
`;

const Text=styled.p`
    color:white;
    font-weight:700;

    margin:30px auto;
`;
const CurriculumUpload=()=>{

    return(
        <>
            <Container>
                <Header />
                <Text>test Text - Curriculum upload page</Text>
                <Link to={'/'}>
                    Main 이동
                </Link>
            </Container>
        </>
    )
}

export default CurriculumUpload;

*/

import React, { useState } from "react";
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
  gap: 5vh;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const CurriculumBox = styled.div`
  width: 1250px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 왼쪽 정렬
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
  text-decoration: none; // 링크의 밑줄 제거
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

const TitleInput = styled.input`
  background-color: transparent; // 배경색 제거
  border: none; // 경계선 제거
  outline: none; // 포커스 아웃라인 제거
  color: white; // 글자색 설정
  font-weight: 700; // 글자 굵기
  font-size: 44px;
  text-align: left; // 텍스트 왼쪽 정렬
  margin: 50px 0 20px 77px;
  max-width: 100%; // 최대 너비 제한
`;

const URLinput = styled.input`
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  width: 1100px;
  height: 40px;
  padding: 10px 20px;
  margin: 15px 77px 15px 77px;
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:hover {
    border: 2px solid rgba(254, 88, 38, 1);
    background-color: rgba(254, 88, 38, 0.19);
    color: rgba(254, 88, 38, 1);
  }
`;
const Detailinput = styled.textarea`
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 15px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: 1100px;
  height: 200px;
  padding: 20px;
  margin: 5px 77px 15px 77px;
  resize: none; // 사용자가 크기 조정을 못 하게 함
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:hover {
    border: 2px solid rgba(254, 88, 38, 1);
    background-color: rgba(254, 88, 38, 0.19);
    color: rgba(254, 88, 38, 1);
  }
`;
const UploadButton = styled.button`
  background-color: rgba(255, 255, 255, 0.19);
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 82.5%;
  margin-top: 22px;
  &:hover {
    background-color: white;
    color: rgba(254, 88, 38, 1);
  }
`;

const CurriculumUpload = () => {
  const [inputValue, setInputValue] = useState("벨로그 URL 을 넣어주세요.");
  const [title, setTitle] = useState("세션 제목을 입력해주세요.");
  const [detail, setDetail] = useState("세션 요약을 해주세요.");

  const handleFocusTitle = (event) => {
    if (event.target.value === "세션 제목을 입력해주세요.") {
      setTitle(""); // 포커스가 있을 때 초기 값이면 입력 필드를 비움.
    }
  };

  const handleTitleChange = (event) => {
    if (event.target.value.length <= 30) {
      setTitle(event.target.value); // 최대 글자수 30자 제한
    }
  };

  const handleBlurTitle = () => {
    if (title.trim() === "") {
      setTitle("세션 제목을 입력해주세요."); // 입력 값이 비어 있으면 다시 초기 값을 설정.
    }
  };

  const handleURLFocus = (event) => {
    if (event.target.value === "벨로그 URL 을 넣어주세요.") {
      setInputValue(""); // 포커스가 있을 때 초기 값이면 입력 필드를 비움.
    }
  };

  const handleURLChange = (event) => {
    setInputValue(event.target.value); // 입력 값이 변경될 때마다 상태를 업데이트함.
  };

  const handleURLBlur = () => {
    if (inputValue.trim() === "") {
      setInputValue("벨로그 URL 을 넣어주세요."); // 입력 값이 비어 있으면 다시 초기 값을 설정.
    }
  };
  const handleFocusDetail = (event) => {
    if (event.target.value === "세션 요약을 해주세요.") {
      setDetail(""); // 포커스가 있을 때 초기 값이면 입력 필드를 비움.
    }
  };

  const handleChangeDetail = (event) => {
    setDetail(event.target.value); // 입력 값이 변경될 때마다 상태를 업데이트함.
  };

  const handleBlurDetail = () => {
    if (detail.trim() === "") {
      setDetail("세션 요약을 해주세요."); // 입력 값이 비어 있으면 다시 초기 값을 설정.
    }
  };
  return (
    <>
      <Container>
        <Header />
        <CurriculumBox>
          <CloseButton to="/curriculum">
            <FaTimes />
          </CloseButton>
          <TitleInput
            type="text"
            value={title}
            onChange={handleTitleChange}
            onFocus={handleFocusTitle}
            onBlur={handleBlurTitle}
            maxLength="30" // HTML 속성을 사용하여 글자 수 제한
          />
          <StyledHr />
          <URLinput
            value={inputValue}
            onChange={handleURLChange}
            onFocus={handleURLFocus}
            onBlur={handleURLBlur}
          />
          <Detailinput
            type="text"
            value={detail}
            onChange={handleChangeDetail}
            onFocus={handleFocusDetail}
            onBlur={handleBlurDetail}
          />
          <UploadButton>업로드 하기</UploadButton>
        </CurriculumBox>
        <Footer />
      </Container>
    </>
  );
};

export default CurriculumUpload;
