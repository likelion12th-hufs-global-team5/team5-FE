import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BarContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.35);
  color: white;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 5px;
  height: 35px;
  width: ${(props) => props.width || "780px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: inherit; // Link의 기본 파란색과 밑줄 없애기
  text-decoration: none;
`;

const ButtonLabel = styled.span`
  font-size: 16px;
  flex-grow: 1;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.english};
`;

const UploadButton = styled.button`
  background-color: white;
  color: #fe5826;
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  padding: 0px 10px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: #fe5826;
    color: white;
  }
`;

const SessionBar = ({ label, labelTo, buttonTo, width }) => {
  return (
    <BarContainer width={width}>
      <StyledLink to={labelTo}>
        <ButtonLabel>{label}</ButtonLabel>
      </StyledLink>
      <StyledLink to={buttonTo}>
        <UploadButton>업로드</UploadButton>
      </StyledLink>
    </BarContainer>
  );
};

export default SessionBar;
