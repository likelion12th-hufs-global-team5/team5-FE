import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import { editUser } from "../redux/userSlice";

import Header from "../components/Header";
import Password from "../components/Password";
import Footer from "../components/Footer";
import { BsPencilFill, BsFillCameraFill } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 5vw;

  /* width: 100%; */
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
  left: 37%;
  top: 80%;

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

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.profileText};

  /* flex-wrap: wrap;
    gap:2vw; */
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
    const user = useSelector((state) => state.user.user);
    const [formData, setFormData] = useState({
        part: user.part || '',
        introduction: user.introduction || '',
        userPhoto: user.userPhoto || '',
        current_password: '',
        new_password: ''
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({ ...formData, memberId: user.memberId }));
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
              <span 
                className="userName">
                    {/* 김준영 */}
                    {user.name}
                    </span>
              <span 
                className="year">
                    11기
                    {user.year}
                    </span>
              <EditUserPositionDiv>
                <EditUserPosition 
                    type="text"
                    name='part'
                    value={formData.part}
                    onChange={handleChange}
                    placeholder="바꾸실 포지션을 작성해주세요" />
                <button type="submit">
                  <BsPencilFill className="icon" />
                </button>
              </EditUserPositionDiv>
            </ContentHeader>
            <div className="introduce">
              한줄소개
              <AddUserIntroduce 
                type='text'
                name='introduction'
                value={formData.introduction}
                onChange={handleChange}
                placeholder="한줄 소개를 입력해주세요">
                  {user.introduction}
                </AddUserIntroduce>
            </div>
            <EditPasswordDiv>
              로그인 정보 수정
              <Password
                type={Password}
                firstPlaceHolder={"현재 비밀번호를 입력해주세요"}
                firstValue={formData.current_password}
                secondPlaceHolder={"변경하실 비밀번호를 입력해주세요"}
                secondValue={formData.new_password}
              />
            </EditPasswordDiv>
            <EditButton>수정하기</EditButton>
          </Contant>
        </ContentDiv>
        <Footer />
      </Container>
    </>
  );
};

export default Profile;