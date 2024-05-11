import React, { useEffect,useRef } from 'react';
import styled from 'styled-components';

const StarsContainer=styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;

    background-color:${({theme})=>theme.colors.white};
`;

const StyledStar=styled.div`
    position:absolute;
    width:${props => props.size}px;
    height: ${props => props.size}px;

    background-color: ${({theme})=>theme.colors.star};
    border-radius: 50%;

    left: ${props=>props.x}px;
    top:${props => props.y}px;

    animation:pulsate ${props => props.time}s infinite;

    @keyframes pulsate {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1);
        }
    }
`;

const star=({x,y,size,time})=>{
    return(
        <>
            <StyledStar x={x} y={y} size={size} time={time} />
        </>
    )
};

const RandomStars=()=>{
    const starsRef=useRef(null);

    useEffect(()=>{
        const createStars=()=>{
            const numStars=Math.floor(Math.random()*50)+50;

            for(let i=0; i<numStars; i++){
                const starSize=Math.random()*3+1;
                const x=Math.random()*window.innerWidth;
                const y=Math.random()*window.innerHeight;
                const star=document.createElement('div');

                star.className='star';
                star.style.width='${starSize}px';
                star.style.height='${starSize}px';
                star.style.left='${x}px';
                star.style.top='${y}px';

                star.style.background='#fff';

                document.body.appendChild(star);
            }
        };

        createStars();

        return () => {
            // clean up stars when component unmounts
            const stars=document.querySelectorAll('.star');
            stars.forEach(star=>star.remove());
        };
    },[]);
    return(
        <>
            <StarsContainer ref={starsRef}/>;
        </>
    )
};

export default RandomStars;