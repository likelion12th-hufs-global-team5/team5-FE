
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageContainers from '../components/ImageContainers';
import axios from 'axios';

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

const Project=()=>{
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://{SERVER_URL}/api/projects', {
            headers: {
                HOST: 'https://www.example.com/kr',
                Authorization: 'usertoken',
            },
        });
        setProjects(response.data);
        setLoading(false);
    } catch (error) {
        console.error('불러오기를 실패했습니다.', error);
      setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);
  
    return(
        <>
            <Container>
                <Header />
                  <Projectdiv>

                    <Buttondiv>


                        <Link to={'/projectUpload'} className='link'>
                            업로드하기
                            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                            <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>    
                        </Link>
                    </Buttondiv>
                    <ImageContainerSet>
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>  
                    </ImageContainerSet>
                    <ImageContainerSet >
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>  
                    </ImageContainerSet>                          
                    <ImageContainerSet >
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>
                        <ImageContainers ></ImageContainers>  
                    </ImageContainerSet>                                                      
                </Projectdiv>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Project;