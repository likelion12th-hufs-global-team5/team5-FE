import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userJoinMembership } from "../redux/userSlice";

import Password from "../components/Password";
import LogoCircle from "../components/LogoCircle";
import Stars from "../components/Stars";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 60px;

  flex-wrap: wrap;
  gap: 7vw;
`;
const JoinContainer = styled.div`
  z-index: 5;

  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  justify-content: space-between;

  width: 42.3%;
  height: 100%;
  padding: 1.5vw;

  flex-wrap: wrap;
  gap: 1.5vw;

  color: ${({ theme }) => theme.colors.white};
  background: rgba(255, 255, 255, 0.19);
  border-radius: 20px;

  .joinButton {
    display: flex;
    flex-wrap: wrap-reverse;
  }

  // 회원가입 버튼 위치 조정때문에 넣음
  .empty {
    width: 10%;
  }

  .position {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2vw;
  }

  .inputsDiv {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2vw;
  }
`;
const JoinContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  line-height: 130%;

  flex-wrap: wrap;
  gap: 0.7vw;
  line-height: 150%;

  .Header {
    font-size: ${({ theme }) => theme.fontSize.joinHeader};
    font-weight: ${({ theme }) => theme.fontWeights.joinHeader};
  }
`;
const JoinInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap: 0.5vw;
  p {
    width: 3vw;

    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.inputText};
    font-weight: ${({ theme }) => theme.fontWeights.inputText};
  }

  // input password 창 정렬 맞추기 위해 만든것.
  .passwordTransparent {
    color: transparent;
    background-color: transparent;
  }

  .position {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    gap: 0.5vw;
  }
`;
const JoinInput = styled.input`
  display: flex;

  margin: 0px;
  padding: 18px 23px;

  width: 85%;
  height: auto;

  border: none;
  border-radius: 50px;

  font-size: ${({ theme }) => theme.fontSize.loginInputText};

  outline: none;

  background: rgba(255, 255, 255, 0.19);
  //border-color: ${({ theme }) => theme.colors.white};
  border: 0.3vw solid rgba(255, 255, 255, 0);
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 0.3vw solid white;

    transition: all 0.1s;
  }
  &:hover::placeholder {
    color: ${({ theme }) =>
      theme.colors.white}; /* hover 시 placeholder 색상 변경 */
  }
  &:active {
    color: ${({ theme }) => theme.colors.mainColor};
    border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
    background-color: rgba(254, 88, 38, 0.19);
    transition: all 0.1s;
  }
  &:active::placeholder {
    color: ${({ theme }) => theme.colors.mainColor};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const JoinButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  flex-wrap: wrap;
  /* gap:0.5vw; */
  /* gap: 2.3vw; */
  gap: 1.5vw;

  p {
    width: 3vw;

    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.inputText};
    font-weight: ${({ theme }) => theme.fontWeights.inputText};
  }

  .buttonSpace {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vw;
    justify-content: space-between;
  }
`;
const JoinInputButtons = styled.button`
  background: rgba(255, 255, 255, 0.19);
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 25px;

  border-radius: 50px;
  box-sizing: border-box; /* border-box 값을 설정하여 border가 요소 안으로 들어가게 함 */

  font-size: ${({ theme }) => theme.fontSize.joinPositionBtn};
  border: 3px solid rgba(255, 255, 255, 0);
  &:hover {
    background: rgba(255, 255, 255, 0.19);
    color: ${({ theme }) => theme.colors.white};
    border: solid 3px;
    border-color: ${({ theme }) => theme.colors.white};
    transition: all 0.1s;
  }

  &:active {
    background: rgba(254, 88, 38, 0.19);
    color: ${({ theme }) => theme.colors.mainColor};
    border: solid 3px;
    border-color: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }
`;

const JoinButton = styled.button`
  padding: 8px 44px;
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.JoinMembership};

  font-size: ${({ theme }) => theme.fontSize.buttonFont};
  font-weight: ${({ theme }) => theme.fontWeights.JoinMembership};

  border-radius: 50px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.2s;
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.2s;
  }
`;
const JoinMembership = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    memberId: "",
    name: "",
    studentNumber: "",
    password1: "",
    password2: "",
    currentPosition: "",
    year: Number,
    introduction: "",
    part: "",
  });

  // const [partSelect,setPartSelect]=useState(false);
  // const [positionSelect,setPositionSelect]=useSelector(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonChange = (e) => {
    // if (partSelect){
    //     setPartSelect=!partSelect
    // } else if (!partSelect){
    //     setPartSelect
    // }
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("회원가입 성공~");
    dispatch(
      userJoinMembership({
        memberId: `${formData.memberId}`,
        name: `${formData.name}`,
        studentNumber: `${formData.studentNumber}`,
        password1: `${formData.password1}`,
        password2: `${formData.password2}`,
        currentPosition: `${formData.currentPosition}`,
        year: `${formData.year}`,
        part: `${formData.part}`,
      })
    );
    navigate("/login");
  };

  return (
    <>
      <Container>
        <LogoCircle />
        <JoinContainer>
          <JoinContainerHeader>
            <p className="Header">회원가입</p>
            <p>
              한국외국어대학교 글로벌 캠퍼스
              <br />
              멋쟁이사자처럼 대학 홈페이지 입니다.
            </p>
          </JoinContainerHeader>
          <form
            className="inputsDiv"
            // onSubmit={handleFormSubmit}
            onSubmit={handleFormSubmit}
            style={{ margin: "0px" }}
          >
            <JoinInputDiv>
              <p>이름</p>
              <JoinInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="이름을 작성해주세요."
              />
            </JoinInputDiv>
            <JoinInputDiv>
              <p>학번</p>
              <JoinInput
                type="number"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleInputChange}
                required
                placeholder="학번을 작성해주세요."
              />
            </JoinInputDiv>
            <JoinInputDiv>
              <p>기수</p>
              <JoinInput
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                placeholder="기수를 숫자로만 작성해주세요."
              />
            </JoinInputDiv>
            <JoinInputDiv>
              <p>I D</p>
              <JoinInput
                type="text"
                name="memberId"
                value={formData.memberId}
                onChange={handleInputChange}
                required
                placeholder="아이디를 작성해주세요."
              />
            </JoinInputDiv>
            <JoinInputDiv>
              <p>P W</p>
              <JoinInput
                type="password"
                name="password1"
                value={formData.password1}
                onChange={handleInputChange}
                required
                placeholder="비밀번호를 작성해주세요."
              />
            </JoinInputDiv>
            <JoinInputDiv>
              <p className="passwordTransparent">pw</p>
              <JoinInput
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
                required
                placeholder="비밀번호를 다시 작성해주세요."
              />
            </JoinInputDiv>
            <JoinButtonsDiv>
              <p>파트</p>
              <div className="buttonSpace">
                <JoinInputButtons
                  type="button"
                  name="part"
                  value="FE"
                  onClick={handleButtonChange}
                  required
                >
                  Front-End
                </JoinInputButtons>
                <JoinInputButtons
                  type="button"
                  name="part"
                  value="BE"
                  onClick={handleButtonChange}
                  required
                >
                  Back-End
                </JoinInputButtons>
              </div>
            </JoinButtonsDiv>
            <JoinButtonsDiv>
              <p>활동</p>
              <div className="buttonSpace">
                <JoinInputButtons
                  type="button"
                  name="currentPosition"
                  value="아기사자"
                  onClick={handleButtonChange}
                  required
                >
                  아기사자
                </JoinInputButtons>
                <JoinInputButtons
                  type="button"
                  name="currentPosition"
                  value="운영진"
                  onClick={handleButtonChange}
                  required
                >
                  운영진
                </JoinInputButtons>
              </div>
            </JoinButtonsDiv>
          </form>
          <div className="joinButton">
            <div className="empty" />
            <Link to={"/login"}>
              <JoinButton type="submit" onClick={handleFormSubmit}>
                회원가입
                {/* {loading ? '가입중...':'가입하기'} */}
                {user.status === "loading" && <p>Loading...</p>}
                {user.status === "failed" && <p>Error: {user.error}</p>}
              </JoinButton>
            </Link>
          </div>
        </JoinContainer>
        <Stars />
      </Container>
    </>
  );
};

export default JoinMembership;
