import React from 'react';
import styled from 'styled-components';

const CircleDiv=styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;

    width:619px;
    height:619px;

    margin:160px auto 0px auto;

    border-radius:100%;
    background: linear-gradient(105deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%);
`;
const Slogan=styled.p`
    margin:auto 0;

    color:${({theme})=>theme.colors.white};
    font-family:${({theme})=>theme.fonts.english};
    font-size:${({theme})=>theme.fontSize.slogan};
`;
const Circle=()=>{

    return(
        <> 
            <CircleDiv>
                <Slogan>GROWL - TO<br/>- &gt; WORLD</Slogan>
            </CircleDiv>
        </>
    )
};


export default Circle;