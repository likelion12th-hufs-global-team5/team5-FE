// import React from 'react';
// import styled from 'styled-components';

// const StyledStar=styled.div`
//     position:absolute;
//     width:${props => props.size}px;
//     height: ${props => props.size}px;

//     background-color: ${({theme})=>theme.colors.star};
//     border-radius: 50%;

//     left: ${props=>props.x}px;
//     top:${props => props.y}px;

//     animation:pulsate ${props => props.time}s infinite;

//     @keyframes pulsate {
//         0%{
//             transform: scale(1);
//         }
//         50%{
//             transform: scale(1.2);
//         }
//         100%{
//             transform: scale(1);
//         }
//     }
// `;

// const Star=()=>{
//     const starSetting=({x,y,size,time})=>{

//         return(
//             <>
//                 <StyledStar x={x} y={y} size={size} time={time} />
//             </>
//         )
//     };

//     // 별 위치,크기,시간 함수
//     const randomNumber = Math.floor(Math.random()*1301);
//     const sizeRandom=Math.floor(Math.random()*7)+7;
//     const timeRandom=Math.floor(Math.random()*0.1)+0.5

//     return(
//         <>
//         </>
//     )
// }


// function generateRandomStars(min, max) {
//   const numberOfStars = Math.floor(Math.random() * (max - min + 1)) + min;
//   const stars = [];
//   for (let i = 0; i < numberOfStars; i++) {
//     const x = Math.floor(Math.random() * window.innerWidth);
//     const y = Math.floor(Math.random() * window.innerHeight);
//     const size = Math.floor(Math.random() * 30) + 10;
//     const time = Math.random() * 2 + 1;
//     stars.push({ x, y, size, time });
//   }
//   return stars;
// }

// const App = () => {
//   const stars = generateRandomStars(5, 15); // 5에서 15개의 랜덤한 별 생성
//   return (
//     <div>
//       {stars.map((star, index) => (
//         <Star key={index} {...star} />
//       ))}
//     </div>
//   );
// };

// export default App;

// export default Star;