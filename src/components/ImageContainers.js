import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ImageContainer=styled.div`
    position: relative;
`;

const EachDiv=styled.div`
    width : 250px;
    height : 250px;
    border-radius:20px;
    background-image: url(${props => props.imageUrl});
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
    display:flex;
    justify-content: center;
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


const ImageContainers=(props)=>{
    const {imageUrl, label1, label2}=props;
    return(    

        <ImageContainer>
        <Link to={'/projectDetail'} className='link'>
            <EachDiv imageUrl={imageUrl}>
                <Rectangularinimg>
                    {label1}
                </Rectangularinimg>
            </EachDiv>
            <TextBelowImageContainer>
                <TextBelowImage>
                    {label2}
                </TextBelowImage>
            </TextBelowImageContainer>
        </Link>
        </ImageContainer>
    );
};



export default ImageContainers;