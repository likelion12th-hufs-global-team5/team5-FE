import React, { useState } from 'react';
import styled,
        //animation
        { keyframes }from 'styled-components';

const rotate = keyframes`
    from{
        background: linear-gradient(105deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%);
        opacity:1;
        // transition: background-color 0.2s;
    }
    25%{
        background: linear-gradient(105deg, rgba(254,88,38,0.5) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.5) 100%);
        opacity:0.75;
        // transition: background-color 0.2s;
    }
    50%{
        background: linear-gradient(105deg, rgba(0,0,0,0) 0%, rgba(32,8,1,0.25) 50%, rgba(254,88,38,0.25) 100%);
        opacity:0.5;
        // transition: background-color 0.2s;
    }
    75%{
        background: linear-gradient(105deg, rgba(0,0,0,0) 0%, rgba(32,8,1,0.5) 50%, rgba(254,88,38,0.5) 100%);
        opacity:0.75;
        // transition: background-color 0.2s;
    }
    to{
        background: linear-gradient(105deg, rgba(32,8,1,0.75) 0% , rgba(254,88,38,0.75) 50%, rgba(0,0,0,0) 100% ) ;
        opacity:1;
        // transition: background-color 0.2s;
    }
`;

const CircleDiv=styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;

    width:619px;
    height:619px;

    // margin:160px auto 0px auto;

    // background: linear-gradient(105deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%);
    backdrop-filter: blur(100px);

    border:solid 0.5px;
    border-radius:100%;
    // border-color: liner-gradient(75deg, rgba(254,88,38,0.75) 0%, rgba(0,0,0,0) 50%, rgba(32,8,1,0.75) 100%)

    // border-color:rgba(255,255,255,0.1);
    // border-color:#fff;

    animation:${rotate} 1s linear infinite;
    transition: background-color 0.2s;
    
    `;

// Blur 속성 먹이려고 p -> div로 styled 타입 바꿈
// const Slogan=styled.p`
//     margin:auto 0;

//     color:${({theme})=>theme.colors.white};
//     font-family:${({theme})=>theme.fonts.english};
//     font-size:${({theme})=>theme.fontSize.slogan};
// `;

const Slogan=styled.div`
    margin:0 auto;

    width:619px;
    height:619px;

    display:flex;

    text-align:center;
    align-items:center;
    justify-content:center;

    backdrop-filter: blur(5px);

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