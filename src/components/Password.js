import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-around;
  margin-top: 1vw;
  padding-left: 1vw;
  /* border-left: 0.3vw solid white; */

  /* background-color: blue; */
`;
const Text = styled.p`
  color: white;
  font-weight: bold;
`;
const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: left;
  width: 100%;

  flex-wrap: wrap;
  gap: 1.5vw;

  /* background-color: red; */
`;
const FirstPassword = styled.input`
  /* background-color:rgba(255,255,255,0.19);
    color: white;

    border-radius: 50px;

    &:hover{
        color: ${({ theme }) => theme.colors.mainColor};
        border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
        transition: all 0.1s;
    } */
  text-align: start;

  border-radius: 50px;
  outline: none;
  border: 0.3vw solid rgba(255, 255, 255, 0);

  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.19);

  padding: 15px;

  width: 90%;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 0.3vw solid white;

    transition: all 0.1s;
  }
  &:hover::placeholder {
        color:${({theme})=>theme.colors.white}; /* hover 시 placeholder 색상 변경 */
    }
  &:active {
    color: ${({ theme }) => theme.colors.mainColor};
    border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
    background-color: rgba(254, 88, 38, 0.19);
    transition: all 0.1s;
  }
  &:active::placeholder{
        color:${({theme})=>theme.colors.mainColor};
    }
  /* &:valid{
        color:${({ theme }) => theme.colors.mainColor};
        border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
        background-color:rgba(254,88,38,0.19);
        transition: all 0.1s;
    } */
`;
const SecondPassword = styled.input`
  /* text-align: center; */
  text-align: start;

  border-radius: 50px;
  outline: none;
  border: 0.3vw solid rgba(255, 255, 255, 0);

  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.19);

  padding: 15px;

  width: 90%;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 0.3vw solid white;

    transition: all 0.1s;
  }
  &:hover::placeholder {
        color:${({theme})=>theme.colors.white}; /* hover 시 placeholder 색상 변경 */
    }
  &:active {
    color: ${({ theme }) => theme.colors.mainColor};
    border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
    background-color: rgba(254, 88, 38, 0.19);
    transition: all 0.1s;
  }
  &:active::placeholder{
        color:${({theme})=>theme.colors.mainColor};
    }
  /* &:valid{
        color:${({ theme }) => theme.colors.mainColor};
        border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
        background-color:rgba(254,88,38,0.19);
        transition: all 0.1s;
    } */
  &:invalid {
    color: ${({ theme }) => theme.colors.white};
    border: 0.3vw solid ${({ theme }) => theme.colors.white};
    background-color: rgba(255, 255, 255, 0.19);
    transition: all 0.1s;
  }
`;

const Password = ({ 
    firstName,
    secondName,
    firstValue,
    secondValue,
    firstPlaceHolder,
    secondPlaceHolder,
  }) => {
  return (
    <>
      <Container>
        <Text>PW</Text>
        <PasswordDiv>
          <FirstPassword 
            name={firstName}
            value={firstValue} 
            placeholder={firstPlaceHolder}
          />
          <SecondPassword 
            name={secondName}
            value={secondValue}
            placeholder={secondPlaceHolder}
            />
        </PasswordDiv>
      </Container>
    </>
  );
};

export default Password;
