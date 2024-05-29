import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Stars from '../components/Stars';
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

    /* font-family: "Noto+Sans+KR", sans-serif; */
    font-family: ${({theme})=>theme.fonts.korean};

    &:hover{
        background-color:white;
        color:#FE5826;
        transition: all 0.2s;
    }

    &:active{
        color:white;
        background-color: ${({theme})=>theme.colors.mainColor};
        transition: all 0.2s;
    }

`;

const StyledLink = styled(Link)`
    color:${({theme}) => theme.colors.fe5826};
    text-decoration: none;
`;

 
const ImageContainerSet = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 115px;
    margin-left: 77px;
`;

const Project=()=>{
    const url = "/projects/all/";
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
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
          setProjects(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }, [url]);

    console.log(projects);
    const filteredProjects = projects.filter((project) =>
      [1, 2, 3, 4, 5].includes(project.id)
    );

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
<<<<<<< Updated upstream
                    <StyledLink to={'/projectUpload'}>
                        <Buttondiv onClick={handleUploadClick}>
                            업로드하기
                        </Buttondiv>
                    </StyledLink>
=======
                    <Link to={'/projectUpload'} className='link'>
                        <Buttondiv onClick={handleUploadClick}>
                            업로드하기
                        </Buttondiv>
                    </Link>
>>>>>>> Stashed changes

                    <ImageContainerSet>
                        {filteredProjects.map((project) => (
                            <ImageContainers
                            key={project.id}
                            label1={project.projectType}
                            label2={project.teamName}
                            ImageURL={project.projectImage}
                        />
                        ))}
                    </ImageContainerSet>
                </Projectdiv>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Project;