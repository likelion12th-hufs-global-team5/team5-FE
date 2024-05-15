import React from 'react';
import styled from 'styled-components';

const StyledStar=styled.div`
  @keyframes pulsate {
        0%{
            opacity: 0.5;
            transform: scale(1);
        }
        20%{
            opacity: 1;
            transform: scale(1.2);
        }
        40%{
            opacity: 0.5;
            transform: scale(1.5);
        }
        60%{
            opacity: 1;
            transform: scale(1.5);
        }
        80%{
            opacity: 1;
            transform: scale(1.2);
        }
        100%{
            opacity: 0.5;
            transform: scale(1);
        }
    }

    /* position:absolute;
    width:${props => props.size}px;
    height: ${props => props.size}px;

    background-color: ${({theme})=>theme.colors.star};
    border-radius: 50%;
    opacity: 0.7;

    left: ${props=>props.x}px;
    top:${props => props.y}px;

    animation:pulsate ${props => props.time}s infinite; */

    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${({ theme }) => theme.colors.star};
    border-radius: 50%;
    opacity: 0.7;
    animation: pulsate ${props => props.time}s infinite;

    /* 반응형 설정 */
    @media (max-width: 768px) {
      /* 화면 너비가 768px 이하일 때 적용할 스타일 */
      width: ${props => props.size / 2}px;
      height: ${props => props.size / 2}px;
    }

    /* 위치 설정 */
    left: ${props => props.x}px;
    top: ${props => props.y}px;
`;


function generateRandomStars(min, max) {
  const numberOfStars = Math.floor(Math.random() * (max - min + 1)) + min;
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.floor(Math.random() * window.innerWidth)-50;
    const y = Math.floor(Math.random() * window.innerHeight)-50;
    const size = Math.floor(Math.random() * 1) + 3;
    const time = Math.random() * 1 + 2;
    const scale = Math.floor(Math.random()*0.7)+1.3;
    stars.push({ x, y, size, time, scale });
  }
  return stars;
}

const Star=({x,y,size,time,scale})=>{

    return(
        <>
            <StyledStar x={x} y={y} size={size} time={time} scale={scale}/>
        </>
    )
};

const Stars = () => {
  const starsNum = generateRandomStars(5, 15); // 5에서 15개의 랜덤한 별 생성
  return (
    <div>
      {starsNum.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
};

export default Stars;