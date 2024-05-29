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
    transition: all 0.1s;
    
    

&:hover{
    color:${({theme}) => theme.colors.fe5826};
    background-color:white;

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
                    <StyledLink to={'/projectUpload'}>
                        <Buttondiv onClick={handleUploadClick}>
                            업로드하기
                        </Buttondiv>
                    </StyledLink>

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