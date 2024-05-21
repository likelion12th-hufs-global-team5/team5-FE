import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";


const ImageContainer=styled.div`
    position: relative;
`;

const EachDiv=styled.div`
    width : 250px;
    height : 250px;
    border-radius:20px;
    background-image: url(${props => props.imageUrl});
    position:relative;

    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg'); 
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

                <Rectangularinimg>
                    {projectType}
                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                    <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                </Rectangularinimg>
            </EachDiv>
            <TextBelowImageContainer>
                <TextBelowImage>
                    {teamName}
                    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
                    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
                    <Link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></Link>
                </TextBelowImage>
            </TextBelowImageContainer>
        </Link>
        </ImageContainer>
    );
};



export default ImageContainers;