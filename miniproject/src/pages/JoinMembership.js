import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Circle from '../components/Circle';
import theme from '../styles/theme';

const Container=styled.div`
    display:flex;
    flex-direction:row;

    align-items:center;
	justify-content: center;

    padding:60px;
`;
const LogoCircleDiv=styled.div`
    z-index:1;

    width:100%;
    height:100%;
    // margin-left:60px;

    display:flex;
    flex-direction:column;
    flex-wrap: wrap;

    justify-content: space-between;
`;
const JoinContainer=styled.div`
    z-index:5;

    display:flex;
    flex-direction:column;
    text-align:left;

    width:609px;
    height:744px;
    padding:30px;

    /* flex-wrap: wrap; */

    color:${({theme})=>theme.colors.white};
    background:rgba(255,255,255,0.19);
    border-radius:20px;
`;
const JoinContainerHeader=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    /* justify-content: center; */
    line-height: 130%;

    flex-wrap: wrap;
    gap: 30px;

    .Header{
        font-size: ${({theme})=>theme.fontSize.joinHeader};
        font-weight: ${({theme})=>theme.fontWeights.joinHeader};
    }
`;
const JoinInputDiv=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    p{
        font-size:${({theme})=>theme.fontSize.inputText};
        font-weight:${({theme})=>theme.fontWeights.inputText};
    }

    .password{
        align-items: first baseline;
    }
`;
const JoinInput=styled.input`
    display:flex;
    /* flex-direction:left; */

    margin:30px 0px;
    padding:18px 33px;

    width:450px;
    height:50px;

    border:none;
    border-radius:50px;

    font-size:${({theme})=>theme.fontSize.loginInputText};
    /* font-size: 36px; */

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
                <LogoCircleDiv>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Circle />
                </LogoCircleDiv>
                <JoinContainer>
                    <JoinContainerHeader>
                        <p className='Header'>회원가입</p>
                        <p>한국외국어대학교 글로벌 캠퍼스<br />
                            멋쟁이사자처럼 대학 홈페이지 입니다.</p>
                    </JoinContainerHeader>
                    <JoinInputDiv>
                        <p>이름</p>
                        <JoinInput placeholder='이름을 작성해주세요.'/>
                    </JoinInputDiv>
                    <JoinInputDiv>
                        <p>학번</p>
                        <JoinInput placeholder='학번을 작성해주세요.'/>
                    </JoinInputDiv>
                    <JoinInputDiv>
                        <p>ID</p>
                        <JoinInput placeholder='아이디를 작성해주세요.'/>
                    </JoinInputDiv>
                    <JoinInputDiv className='password'>
                        <p>pw</p>
                        <div>
                            <JoinInput placeholder='비밀번호를 작성해주세요.'/>
                            <JoinInput placeholder='비밀번호를 다시 작성해주세요.'/>
                        </div>
                    </JoinInputDiv>
                    <JoinInputDiv>
                        <p>활동</p>
                        <JoinInputPosition>아기사자</JoinInputPosition>
                        <JoinInputPosition>운영진</JoinInputPosition>
                    </JoinInputDiv>
                    <JoinButton>회원가입</JoinButton>
                </JoinContainer>
            </Container>
        </>
    )
}

export default JoinMembership