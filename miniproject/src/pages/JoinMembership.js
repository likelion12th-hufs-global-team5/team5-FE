import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import {registerUserAsync} from '../redux/authSlice';

import LogoCircle from '../components/LogoCircle';
import axios from 'axios';

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
    const name=document.getElementsByName('name');
    const studentNumber=document.getElementsByName('studentName');
    const id=document.getElementsByName('id');
    const password=document.getElementsByName('password');
    const password2=document.getElementsByName('password2');
    const position=document.getElementsByName('position');

    axios({
        method:"POST",
        url:"https://api.likelionhufsglobal.com/join",
        data:{
            "name":name.value,
            "studentNumber":studentNumber.value,
            "id":id.value,
            "password":password.value,
            "position":position.value
        }
    }).then((res)=>{
        console.log(res);
    }).catch((res)=>{
        // console.log(error);
        // throw new Error(error);
    });

    const dispatch=useDispatch();
    const loading=useSelector(state=>state.auth.loading)
    const [formData, setFormData]=useState(
        {name:'',studentNumber:'',id:'',password:'',password2:'',position:''});
    
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData, [name]:value});
    };

    const handleInputPosition=(e)=>{
        const {value}=e.target;
        setFormData({...formData,[setFormData.position]:value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch(registerUserAsync(formData));
    };

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
                            <JoinInput 
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder='이름을 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>학번</p>
                            <JoinInput 
                                type='number'
                                name='studentNumber'
                                value={formData.studentNumber}
                                onChange={handleInputChange}
                                required
                                placeholder='학번을 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>I  D</p>
                            <JoinInput 
                                type='text'
                                name='id'
                                value={formData.id}
                                onChange={handleInputChange}
                                required
                                placeholder='아이디를 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p>P  W</p>
                            <JoinInput 
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder='비밀번호를 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv>
                            <p className='passwordTransparent'>pw</p>
                            <JoinInput 
                                type='password'
                                name='password2'
                                value={formData.password2}
                                // 위의 비밀번호와 비교하는 new event를 넣기
                                // onChange={}
                                placeholder='비밀번호를 다시 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv >
                            {/* 버튼의 value는 아직 잘 모르겠어서 주석처리함 */}
                            {/* <p>활동</p>
                            <div className='position'>
                                <JoinInputPosition
                                    type='button'
                                    value={formData.position}
                                >
                                    아기사자</JoinInputPosition>
                                <JoinInputPosition
                                    type='button'
                                    value={formData.manager}
                                >운영진</JoinInputPosition>
                            </div> */}
                            <div onChange={handleInputChange}>
                                <JoinInputPosition
                                    type='button'
                                    name='babylion'
                                    value={formData.babylion}
                                    onChange={handleInputPosition}
                                    required
                                >아기사자</JoinInputPosition>
                                <JoinInputPosition
                                    type='button'
                                    name='manager'
                                    value={formData.manager}
                                    onChange={handleInputPosition}
                                    required
                                >운영진</JoinInputPosition>
                            </div>
                        </JoinInputDiv>
                    </div>
                    <div className='joinButton'>
                        <div className='empty'/>
                        <Link to={'/login'}>
                            <JoinButton
                                type='submit'
                                disabled={loading}
                            >
                                {/* 회원가입 */}
                                {loading ? '가입중...':'가입하기'}
                            </JoinButton>
                        </Link>
                    </div>
                </JoinContainer>
            </Container>
        </>
    )
}

export default JoinMembership