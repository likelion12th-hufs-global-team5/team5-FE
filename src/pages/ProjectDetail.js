import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';



const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    flex-wrap: wrap;
    gap:5vh;
`;

const Text=styled.p`
    color:blue;
    font-weight:700;

    margin:30px auto;
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 449px;
    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    padding:77px;
    display: flex;
    margin-bottom: 77px;
`;

const MainImage=styled.div`
    width :300px;
    height :300px;
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    background-size: cover;
    background-position: top;
`;

const AllDiv=styled.div`
    display:flex;
    flex-direction :column;
    flex-wrap: wrap;
    gap:15px;
`;

const InputService=styled.div`
    padding:15 10px;
    width:400px;
    margin-left: 50px;
    color:white;
    background-color: transparent;
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

`;

const ButtonContainer = styled.div`
    display: flex;
    width: 423px;
    margin-left: 50px;
`;


const Button1=styled.div`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(254,58,26,0.75);
    margin-right: 31px;
    padding :14px 13px;
    white-space: nowrap;
`;

const Button2=styled.div`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 7px;
    white-space: nowrap;
`;

const Button3=styled.div`
    border-radius: 15px;
    text-align: center;
    color:white;
    font-size:15px;
    font-weight : 500;
    font-family: "Noto+Sans+KR", sans-serif;
    background-color:rgba(255,255,255,0.19);
    margin-right: 31px;
    padding :14px 13px;
    white-space: nowrap;
`;

const WriteDetails=styled.div`
    width: 638px;
    height: 171px;
    border-radius: 15px;
    color:white;
    font-size:18px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
    background-color:rgba(255,255,255,0.5);
    margin-left: 50px;
    display:flex;
    flex-direction: column;
    text-align: left;
    padding-top: 18px;
    padding-right: 21px;
    padding-left: 21px;
`;


const ProjectDetail=()=>{
    const [projectDetails, setProjectDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProjectDetails = async () => {
        try {
          const response = await axios.get('http://{SERVER_URL}/api/project/(id)', {
            headers: {
              HOST: 'https://www.example.com/kr'
            }
          });
          
          setProjectDetails(response.data);
          setLoading(false);
        } catch (error) {
          console.error('불러오기를 실패했습니다.', error);
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchProjectDetails();
      }, []);
    
    return(
        <>
            <Container>
                <Header />
                <Projectdiv>
                    
                    <MainImage>
    
                    </MainImage>
                    <AllDiv>
                        <InputService>{projectDetails.teamName}</InputService>
                        <ButtonContainer>
                            {}
                            <Button1>미니프로젝트</Button1>
                            <Button2>해커톤프로젝트</Button2>
                            <Button3>개인프로젝트</Button3>
                        </ButtonContainer>
                        <WriteDetails>
                            {projectDetails.projectDetail}
                        </WriteDetails>
                    </AllDiv>
                </Projectdiv>
                <Footer> </Footer>
            </Container>
        </>
    )
}

export default ProjectDetail;