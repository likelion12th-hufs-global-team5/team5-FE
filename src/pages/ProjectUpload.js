import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsXCircleFill } from 'react-icons/bs';
import { BsFillCameraFill } from 'react-icons/bs';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    flex-wrap: wrap;
    gap:5vh;

    color:#fff;
`;




const Text=styled.p`
    color:#FE5826;
    font-weight:700;

    margin:30px auto;

    &:hover{
    color:${({theme})=>theme.colors.mainColor};
    background:${({theme})=>theme.colors.white};
    /* border-radius:20px ; */
    transition: all 0.1s;
    }
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 549px;
    position: relative;
    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    padding-top:77px;
    padding-right:77px;
    padding-left: 77px;
    display: flex;
    margin-bottom: 77px;
`;

const CloseButton=styled.div`
    position: absolute;
    top:29px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color:white;
`;


const MainImage=styled.div`
    width :300px;
    height :300px;
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    background-size: cover;
    background-position: top;
    position: relative;
    margin-bottom: 50px;

`;

const ImageCurcle=styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: rgba(255,255,255,0.3);
    margin: 241px 15px 9px 235px;
    display: flex;
    align-items: center;
    justify-content: center;
    left:50%;
`;

const ImageIcon=styled.button`
    font-size: 30px;
    color:white;
    position: absolute;
`;

const AllDiv=styled.div`
    display:flex;
    flex-direction :column;
`;

const InputService=styled.input`
    background-color: transparent;
    padding:15 10px;
    width:400px;
    margin-left: 50px;
    color:white;
    font-size:24px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid white;
    outline:none;
    padding-bottom:15px;
    padding-left:10px;
    text-align: left;
    max-width: 100%;

    &::placeholder {
    color: #fff;
    }
    
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 423px;
    margin-left: 50px;
`;


const Button1=styled.button`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 13px;
    margin-top:15px;
    white-space: nowrap;

    &.active, &:active{
    background-color:rgba(254,58,26,0.75);
    color:white;
    }
    &:hover{
        background-color:rgba(254,58,26,0.75);
        color:white;
    }
`;

const Button2=styled.button`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 7px;
    margin-top:15px;
    white-space: nowrap;

    &.active, &:active{
    background-color:rgba(254,58,26,0.75);
    color:white;
    transition: all 0.1s;
    }
    &:hover{
        background-color:rgba(254,58,26,0.75);
        color:white;
        transition: all 0.1s;
    }
`;

const Button3=styled.button`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 13px;
    margin-top:15px;
    white-space: nowrap;

    &.active, &:active{
    background-color:rgba(254,58,26,0.75);
    color:white;
    transition: all 0.1s;
    }

    &:hover{
        background-color:rgba(254,58,26,0.75);
        color:white;
        transition: all 0.1s;
    }
`;

const WriteDetails=styled.textarea`
    width: 638px;
    height: 171px;
    border-radius: 15px;
    color:#fff;
    font-size:18px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
    background-color:rgba(255,255,255,0.5);
    margin-left: 50px;
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-top: 15px;
    padding-left: 22px;
    padding-top: 24px;
    resize: none;
    border:none;

    &::placeholder {
        color: #fff;
    }
    &:focus {
        outline: none;
        background-color:rgba(255,255,255,0.5);
    }
    &:hover {
        border: 3px solid #FE5826;
        background-color: rgba(254, 58, 26, 0.19);
        color: #FE5826;
        transition: all 0.1s;
    }
    &:hover::placeholder{
        color:#FE5826;
    }
`;

const UploadButton=styled.button`
    width : 195px;
    height : 65px;
    background-color:rgba(255,255,255,0.19);
    border-radius:15px;
    color:white;
    text-align:center;
    font-size:28px;
    font-weight : 700;
    font-family: "Noto+Sans+KR", sans-serif;
    margin-top: 27px;
    margin-bottom: 77px;
    margin-left: 496px;

    &:hover{
        background-color:white;
        color:#FE5826;
        transition: all 0.1s;
    }

    &:active{
        background-color: #FE5826;
        color:white;
        transition: all 0.1s;
    }
`;



const ProjectUpload=()=>{
    const url = "/projects/upload/";
    const [projectUp, setProjectUp] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeButton, setActiveButton] = useState(null);
    const [projectType, setProjectType] = useState('');
    const [projectImage, setProjectImage] = useState(null);
    const [teamName, setTeamName] = useState('');
    const [projectDetail, setProjectDetail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("error!");
      }
      return res.json();
    })
    .then((data) => {
      setProjectUp(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      setError("Failed to load projects. ");
      setLoading(false);
    });
    }, [url]);
    console.log(projectUp);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        setProjectType(buttonType);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProjectImage(file);
        }
    };


    return(
        <>
            <Container>
                <Header />
                    <Projectdiv>
                        <Link to={'/project'} className='link'>
                        <CloseButton>
                            <BsXCircleFill className='icon' />
                        </CloseButton>
                        </Link>
                        <MainImage>
                            <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} id="projectImage" />
                            <label htmlFor="projectImg">
                                <ImageCurcle>
                                    <ImageIcon type='button'>
                                        <BsFillCameraFill className='icon' />
                                    </ImageIcon>
                                </ImageCurcle>
                            </label>
                        </MainImage>
                        <AllDiv>
                            <InputService 
                            type="text"
                            placeholder="서비스명을 작성해주세요.(최대 20글자)"
                            maxLength="20"
                            value={teamName}
                            label1={projectType}
                            label3={projectImage}
                            onChange={(e) => setTeamName(e.target.value)} />
                            <ButtonContainer>
                                <Button1
                                onClick={() => handleButtonClick('미니프로젝트')}
                                className={activeButton === '미니프로젝트' ? 'active' : ''}>미니프로젝트</Button1>
                                <Button2
                                onClick={() => handleButtonClick('해커톤프로젝트')}
                                className={activeButton === '해커톤프로젝트' ? 'active' : ''}>해커톤프로젝트</Button2>
                                <Button3
                                onClick={() => handleButtonClick('개인프로젝트')}
                                className={activeButton === '개인프로젝트' ? 'active' : ''}>개인프로젝트</Button3>
                            </ButtonContainer>
                            <WriteDetails 
                            placeholder="프로젝트 소개를 작성해주세요. (최대 200글자)" 
                            maxLength="200"
                            label2={projectDetail}
                            onChange={(e) => setProjectDetail(e.target.value)}/>
                            <Link to={'/project'} className='link'>
                                    <UploadButton type="submit">
                                        업로드하기
                                    </UploadButton>
                                </Link>
                        </AllDiv>
                    </Projectdiv>
                <Footer />
            </Container>
        </>
    )
}

export default ProjectUpload;