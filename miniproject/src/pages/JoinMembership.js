import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Circle from '../components/Circle';
import theme from '../styles/theme';
import LogoCircle from '../components/LogoCircle';

const Container=styled.div`
    display:flex;
    flex-direction:row;

    align-items:center;
	justify-content: center;

    padding:60px;

    flex-wrap: wrap;
    gap: 7vw;
`;
const JoinContainer=styled.div`
    z-index:5;

    display:flex;
    flex-direction:column;
    text-align:left;
    justify-content: center;

    width: 40%;
    padding: 2vw;

    flex-wrap: wrap;
    gap: 1.5vw;

    color:${({theme})=>theme.colors.white};
    background:rgba(255,255,255,0.19);
    border-radius:20px;

    .joinButton{
        display: flex;
        flex-wrap: wrap-reverse;
    }

    // 회원가입 버튼 위치 조정때문에 넣음
    .empty{
        /* background-color: blue; */
        width: 50%;
    }
`;
const JoinContainerHeader=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    /* justify-content: center; */
    line-height: 130%;

    flex-wrap: wrap;
    /* gap: 30px; */
    gap: 0.7vw;
    line-height: 150%;;

    .Header{
        font-size: ${({theme})=>theme.fontSize.joinHeader};
        font-weight: ${({theme})=>theme.fontWeights.joinHeader};
    }
`;
const JoinInputDiv=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    flex-wrap: wrap;
    gap:1vw;
    p{
        text-align: center;
        font-size:${({theme})=>theme.fontSize.inputText};
        font-weight:${({theme})=>theme.fontWeights.inputText};
        
        /* background-color: blue; */

        width: 3vw;
    }

    // input password 창 정렬 맞추기 위해 만든것.
    .passwordTransparent{
        color:transparent;
        background-color: transparent;
    }

    .position{
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: start;

        flex-wrap: wrap;
        gap: 0.5vw;
    }
`;
const JoinInput=styled.input`
    display:flex;

    margin:30px 0px;
    /* padding:18px 33px; */
    padding: 18px 23px;

    width:450px;
    height:50px;

    border:none;
    border-radius:50px;

    font-size:${({theme})=>theme.fontSize.loginInputText};

    outline:none;

    background:rgba(255,255,255,0.19);
    border-color:${({theme})=>theme.colors.white};

    color:${({theme})=>theme.colors.white};

    &:hover{
        border:solid 4px;

        background:rgba(254,88,38,0.19);
        border-color:${({theme})=>theme.colors.mainColor};

        color:${({theme})=>theme.colors.mainColor};
    }

    &:hover::placeholder {
        color:${({theme})=>theme.colors.mainColor}; /* hover 시 placeholder 색상 변경 */
    }
`;
const JoinInputPosition=styled.button`
    background:rgba(255,255,255,0.19);
    color:${({theme})=>theme.colors.white};
    padding: 12px 25px;

    border-radius: 50px;
    box-sizing: border-box; /* border-box 값을 설정하여 border가 요소 안으로 들어가게 함 */

    font-size: ${({theme})=>theme.fontSize.joinPositionBtn};

    &:hover{
        background:rgba(254,88,38,0.19);
        color:${({theme})=>theme.colors.mainColor};
        border: solid 3px;
        border-color: ${({theme})=>theme.colors.mainColor};
    }
`;

const JoinButton=styled.button`
    padding:8px 44px;
    color: ${({theme})=>theme.colors.mainColor};
    background-color:${({theme})=>theme.colors.white};
    font-weight: ${({theme})=>theme.fontWeights.JoinMembership};

    font-size: ${({theme})=>theme.fontSize.buttonFont};
    font-weight: ${({theme})=>theme.fontWeights.JoinMembership};

    border-radius: 50px;
    &:hover{
        color: ${({theme})=>theme.colors.white};
        background-color:${({theme})=>theme.colors.mainColor};
    }
`;
const JoinMembership=()=>{

    return(
        <>
            <Container>
                <LogoCircle />
                <JoinContainer>
                    <JoinContainerHeader>
                        <p className='Header'>회원가입</p>
                        <p>한국외국어대학교 글로벌 캠퍼스<br />
                            멋쟁이사자처럼 대학 홈페이지 입니다.</p>
                    </JoinContainerHeader>
                    <div>
                        <JoinInputDiv>
                            <p>이름</p>
                            <JoinInput placeholder='이름을 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>학번</p>
                            <JoinInput placeholder='학번을 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>I  D</p>
                            <JoinInput placeholder='아이디를 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>P  W</p>
                            <JoinInput placeholder='비밀번호를 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p className='passwordTransparent'>pw</p>
                            <JoinInput placeholder='비밀번호를 다시 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv >
                            <p>활동</p>
                            <div className='position'>
                                <JoinInputPosition>아기사자</JoinInputPosition>
                                <JoinInputPosition>운영진</JoinInputPosition>
                            </div>
                        </JoinInputDiv>
                    </div>
                    <div className='joinButton'>
                        <div className='empty'/>
                        <JoinButton>회원가입</JoinButton>
                    </div>
                </JoinContainer>
            </Container>
        </>
    )
}

export default JoinMembership