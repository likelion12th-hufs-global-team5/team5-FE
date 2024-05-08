// SessionBar.js
import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  background-color: #dfdfdf;
  color: white;
  padding: 10px 15px 10px 15px;
  margin-top: 15px;
  border-radius: 5px;
  height: 35px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1; // Label이 가능한 많은 공간을 차지하도록
  text-align: left; // 텍스트를 왼쪽 정렬
`;

const UploadButton = styled.button`
  background-color: white;
  color: #fe5826;
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  padding: 0px 10px 0px 10px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0; // 버튼의 크기가 줄어들지 않도록
`;

const SessionBar = ({ label, onLabelClick, onButtonClick }) => {
  return (
    <BarContainer>
      <ButtonLabel onClick={onLabelClick}>{label}</ButtonLabel>
      <UploadButton onClick={onButtonClick}>업로드</UploadButton>
    </BarContainer>
  );
};

export default SessionBar;
