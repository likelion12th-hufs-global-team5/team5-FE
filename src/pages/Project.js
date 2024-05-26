import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageContainers from '../components/ImageContainers';
import { useEffect, useState } from 'react';

const Container=styled.div`
    display:flex;
    flex-direction:column;

    text-align:center;
    align-items:center;

    flex-wrap: wrap;
    gap:5vh;

    .link{
        margin:30px auto;
    }
`;

const Text=styled.p`
    color:blue;
    font-weight:700;

    margin:30px auto;
`;

const Projectdiv=styled.div`
    width : 1150px;
    height : 1385px;
    margin-bottom: 77px;
    background-color:rgba(255,255,255,0.19);
    border-radius:35px;
    padding-top:50px;
    padding-right:77px;
`;

const Buttondiv=styled.button`
    width : 195px;
    height : 65px;
    background-color:rgba(255,255,255,0.19);
    border-radius:15px;
    color:white;
    text-align:center;
    float:right;
    font-size:28px;
    font-weight : 700;
    font-family: "Noto+Sans+KR", sans-serif;

    &:hover{
        background-color:white;
        color:#FE5826;
    }
`;
 
const ImageContainerSet = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 115px;
    margin-left: 77px;
`;

const ImageContainer=styled.div`
    position: relative;
`;

const EachDiv=styled.div`
    width : 250px;
    height : 250px;
    border-radius:20px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    position:relative;
`;

const TextBelowImageContainer = styled.div`
    text-align: center;
`;

const TextBelowImage=styled.p`
    color:white;
    font-size:50px;
    font-weight : 400;
    font-family: "Jersey+15", sans-serif;
`;

const Rectangularinimg=styled.div`
    width : 110px;
    height : 50px;
    border-radius:15px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left:20px;
    color:white;
    font-size:15px;
    font-weight : 400;
    font-family: "Noto+Sans+KR", sans-serif;
    line-height: 50px;
    background-color:rgba(254,58,26,0.75);

`;

const mockProjects = [
    {
        id: 1,
        project_id: 1,
        teamName: "Test1",
        projectType: "미니프로젝트",
        projectDetail: "This is a test1 post",
        projectImage: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg",
        created_at: "2024-05-11T12:56:41.697182Z"
    },
    {
        id: 2,
        project_id: 2,
        teamName: "Test2",
        projectType: "해커톤프로젝트",
        projectDetail: "This is a test2 post",
        projectImage: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg",
        created_at: "2024-05-11T12:57:11.242324Z"
    },
    {
        id: 3,
        project_id: 3,
        teamName: "Test3",
        projectType: "해커톤프로젝트",
        projectDetail: "This is a test3 post",
        projectImage: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg",
        created_at: "2024-05-11T12:57:29.337317Z"
    }
];

const Project=()=>{
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // 모킹 데이터 사용
        setProjects(mockProjects);
    }, []);


    const [project1, setProject1] = useState(null);
    const [project2, setProject2] = useState(null);
    const [project3, setProject3] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://likelionteam5.pythonanywhere.com/projects/list_detail/', {
                    headers: {
                        "HOST": "https://www.example.com/kr",
                        "Authorization": "usertoken"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) setProject1(data[0]);
                    if (data.length > 1) setProject2(data[1]);
                    if (data.length > 2) setProject3(data[2]);
                } else {
                    console.error('Failed to fetch projects');
                }    
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleUploadClick = () => {
        const isLoggedIn = true;
        if (isLoggedIn) {
            navigate('/projectUpload');
        } else {
            setError('회원이 아닙니다.');
        }
    };
    return(
        <>
            <Container>
                <Header />
                  <Projectdiv>
                    <Buttondiv onClick={handleUploadClick}>
                        <Link to={'/projectUpload'} className='link'>
                            업로드하기
                            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                            <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>    
                        </Link>
                    </Buttondiv>

                    <ImageContainerSet>
                        {projects[0] && <ImageContainers project={projects[0]} />}
                        {projects[1] && <ImageContainers project={projects[1]} />}
                        {projects[2] && <ImageContainers project={projects[2]} />}
                    </ImageContainerSet>
                    <ImageContainerSet>
                        {projects[0] && <ImageContainers project={projects[0]} />}
                        {projects[1] && <ImageContainers project={projects[1]} />}
                        {projects[2] && <ImageContainers project={projects[2]} />}
                    </ImageContainerSet>                          
                    <ImageContainerSet>
                        {projects[0] && <ImageContainers project={projects[0]} />}
                        {projects[1] && <ImageContainers project={projects[1]} />}
                        {projects[2] && <ImageContainers project={projects[2]} />}
                    </ImageContainerSet>                                                      
                </Projectdiv>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Project;