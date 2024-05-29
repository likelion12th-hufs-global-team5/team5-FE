import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/userSlice";

import Header from "../components/Header";
import Password from "../components/Password";

import Footer from "../components/Footer";
import { BsPencilFill, BsFillCameraFill,BsExclamationCircleFill } from "react-icons/bs";
import Stars from "../components/Stars";
import Circle from "../components/Circle";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 5vw;

  /* width: 100%; */
  justify-content: space-around;

  z-index: 10;
  position: relative;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2vw;

  /* flex-wrap: wrap;
    gap: 1vw; */

  background: rgba(255, 255, 255, 0.19);
  width: 80%;

  border-radius: 35px;

  padding: 2vw;
`;
const UserImage = styled.div`
  position: relative;

  z-index: 1;

  width: 27.5vw;
  height: 27.5vw;
  padding-left: 50px;
  background-image: url("https://i.pinimg.com/564x/33/5f/14/335f1418109df8cf8bdbe15f80d621c4.jpg");
`;

const UserImageButton = styled.button`
  position: absolute;
  left: 36%;
  top: 80.5%;

  z-index: 2;

  width: 3vw;
  height: 3vw;

  outline: none;
  border: none;

  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 100%;

  .icon {
    width: 30px;
    height: 30px;

    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    .icon {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    transition: all 0.1s;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainColor};
    .icon {
      color: ${({ theme }) => theme.colors.white};
    }
    transition: all 0.1s;
  }
`;
const Contant = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap: 1.3vw;

  .introduce {
    display: flex;
    flex-direction: column;
    align-items: start;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 1vw;

    color: ${({ theme }) => theme.colors.white};
  }

  .passwordEdit{
    /* display: flex;
    flex-direction: row; */
    flex-wrap: wrap;
    gap: 1vw;
    justify-content: left;
    text-align: left;

    color: white;
    background-color:blue;
  }
`;
const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  align-items: baseline;

  flex-wrap: wrap;
  gap: 2vw;

  .userName {
    font-size: ${({ theme }) => theme.fontSize.memberContentName};
    font-family: ${({ theme }) => theme.fonts.korean};
  }
  .year {
    font-size: ${({ theme }) => theme.fontSize.memberContentYearPosition};
    font-family: ${({ theme }) => theme.fonts.korean};
  }
`;
const EditUserPositionDiv = styled.div`
  padding-left: 0.5vw;
  border-bottom: 0.5vw solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fontSize.profilePosition};
  font-family: ${({ theme }) => theme.fonts.korean};

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    border-bottom: 0.5vw solid ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }

  &:active {
    color: ${({ theme }) => theme.colors.mainColor};
    border-bottom: 0.5vw solid ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.mainColor};
    border-bottom: 0.5vw solid ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }
  .icon {
    width: 1vw;
    height: 1vw;
  }
  button {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.mainColor};
      transition: all 0.1s;
    }
    &:active {
      color: ${({ theme }) => theme.colors.mainColor};
      transition: all 0.1s;
    }
    &:focus {
      color: ${({ theme }) => theme.colors.mainColor};
      transition: all 0.1s;
    }
  }
`;

const EditUserPosition = styled.input`
  border: none;
  outline: none;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fontSize.profilePosition};
  font-family: ${({ theme }) => theme.fonts.korean};
`;
const AddUserIntroduce = styled.textarea`
  padding: 1.5vw;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.19);

  border: 0.3vw solid rgba(255, 255, 255, 0);
  outline: none;
  border-radius: 25px;

  width: 100%;

  resize: none;

  &:hover {
    border: 0.3vw solid white;
    transition: all 0.1s;
  }
  &:active {
    background-color: rgba(254, 88, 38, 0.19);
    color: ${({ theme }) => theme.colors.mainColor};
    border: 0.3vw solid ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }
`;
const EditPasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex-wrap: wrap;
  gap: 0.5vw;

  padding-left: 1vw;

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.profileText};

  flex-wrap: wrap;
    gap:2vw;

  border-left: 0.3vw solid white;
`;
const EditPasswordInput=styled.input`
  display:flex;

  padding: 18px 23px;

  width: 85%;
  height: auto;

  border:none;
  border-radius:50px;

    font-size:${({theme})=>theme.fontSize.loginInputText};

    outline:none;

    background:rgba(255,255,255,0.19);
    border-color:${({theme})=>theme.colors.white};

    color:${({theme})=>theme.colors.white};

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
    
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const EditButton = styled.button`
  position: relative;
  left: 40%;
  top: 75%;
  background-color: rgba(255, 255, 255, 0.19);
  color: ${({ theme }) => theme.colors.white};

  border-radius: 15px;
  padding: 1vw;
  margin-bottom: 50px;
  border: 0.3vw solid rgba(255, 255, 255, 0);
  font-size: ${({ theme }) => theme.fontSize.profileButton};
  font-weight: bold;
  &:hover {
    border: 0.3vw solid white;
    transition: all 0.1s;
  }
  &:active {
    background-color: white;
    color: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.1s;
  }
`;
const Profile = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user);

  // const user = useSelector((state) => state.user.user);
  // const [formData, setFormData] = useState({
  //     part: user.part || '',
  //     introduction: user.introduction || '',
  //     userPhoto: user.userPhoto || '',
  //     current_password: '',
  //     new_password: ''
  // });

  const [formData, setFormData] = useState({
    part: "",
    introduction: "",
    userPhoto: "",
    current_password: "",
    new_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원정보 수정 완료~');
    dispatch(
      editUser({
        ...formData,
        'part': `${formData.part}`,
        'introduction': `${formData.introduction}`,
        'userPhoto': `${formData.userPhoto}`,
        'current_password': `${formData.current_password}`,
        'new_password': `${formData.new_password}`
      })
    );
    navigate('/')
  };
  return (
    <>
      <Container>
        <Header />
        <ContentDiv>
          <UserImageButton>
            <BsFillCameraFill className="icon" />
          </UserImageButton>
          <UserImage
          // src='https://i.pinimg.com/564x/3f/0e/cb/3f0ecb91c433030f5a413795c41a1d56.jpg'
          />
          <Contant>
            <ContentHeader>
              <span className="userName">
                {/* 김준영 */}
                {user.name}
              </span>
              <span className="year">
                {/* 11기 */}
                {user.year}
              </span>
              <EditUserPositionDiv>
                <EditUserPosition
                  type="text"
                  name="part"
                  value={formData.part}
                  onChange={handleChange}
                  placeholder="바꾸실 포지션을 작성해주세요"
                />
                <button type="submit">
                  <BsPencilFill className="icon" />
                </button>
              </EditUserPositionDiv>
            </ContentHeader>
            <div className="introduce">
              한줄소개
              <AddUserIntroduce
                type="text"
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                placeholder="한줄 소개를 입력해주세요"
              >
                {user.introduction}
              </AddUserIntroduce>
            </div>
            <div  className="passwordEdit">
              <BsExclamationCircleFill />
              로그인 정보 수정
            </div>
            <EditPasswordDiv>
                P W
                <EditPasswordInput 
                  type="password"
                  name='current_password'
                  placeholder="현재 비밀번호를 입력해주세요"
                  value={formData.current_password}
                  onChange={handleChange}
                />
                <EditPasswordInput 
                  type="password"
                  name='new_password'
                  placeholder="변경하실 비밀번호를 입력해주세요"
                  value={formData.new_password}
                  onChange={handleChange}
                />
                {/* <Password
                  type='password'
                  firstName='current_password'
                  firstPlaceHolder={"현재 비밀번호를 입력해주세요"}
                  firstValue={formData.current_password}
                  secondName='new_password'
                  secondPlaceHolder={"변경하실 비밀번호를 입력해주세요"}
                  secondValue={formData.new_password}
                  onChange={handleChange}
                  value={formData.new_password}
                /> */}
              </EditPasswordDiv>
            <EditButton
              onClick={handleSubmit}
            >수정하기</EditButton>
          </Contant>
        </ContentDiv>
        <Circle />
        <Stars />
        <Footer />
      </Container>
    </>
  );
};

export default Profile;
