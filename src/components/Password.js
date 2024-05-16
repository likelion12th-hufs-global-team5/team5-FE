import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    flex-direction: row;
`;
const Text=styled.p`
    color:white;
    font-weight: bold;

`
const FirstPassword=styled.input`
    background-color:rgba(255,255,255,0.19);
    color: white;

    border-radius: 50px;

    &:hover{
        color: ${({theme})=>theme.colors.mainColor};
        border: 0.3vw solid ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
    }
`;
const SecondPassword=styled.input``;

const Password=({firstPlaceHolder, secondPlaceHolder})=>{

    return(
        <>
            <Container>
                <Text>PW</Text>
                <FirstPassword placeholder={firstPlaceHolder}/>
                <SecondPassword placeholder={secondPlaceHolder}/>
            </Container>
        </>
    )
};

export default Password;