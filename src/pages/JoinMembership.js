import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userJoinMembership } from '../redux/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import {registerUserAsync} from '../redux/authSlice';

import LogoCircle from '../components/LogoCircle';

import Stars from '../components/Stars';

const Container=styled.div`
    display:flex;
    flex-direction:row;

    align-items:center;
	justify-content: center;

    /* padding:60px; */

    flex-wrap: wrap;
    gap: 7vw;
`;
const JoinContainer=styled.div`
    z-index:5;

    display:flex;
    flex-direction:column;
    text-align:left;
    justify-content: center;
    justify-content: space-between;

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
        width: 70%;
    }

    .position{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2vw;
    }
`;
const JoinContainerHeader=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    line-height: 130%;

    flex-wrap: wrap;
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
    justify-content: space-between;

    flex-wrap: wrap;
    gap:0.5vw;
    p{
        width: 3vw;
        
        text-align: center;
        font-size:${({theme})=>theme.fontSize.inputText};
        font-weight:${({theme})=>theme.fontWeights.inputText};
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

        flex-wrap: wrap;
        gap: 0.5vw;
    }
`;
const JoinInput=styled.input`
    display:flex;

    margin:30px 0px;
    padding: 18px 23px;

    /* width:450px;
    height:50px; */
    width: 85%;
    height: auto;

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
    
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
        background:rgba(255,255,255,0.19);
        color:${({theme})=>theme.colors.white};
        border: solid 3px;
        border-color: ${({theme})=>theme.colors.white};
        transition: all 0.1s;
    }

    &:active{
        background:rgba(254,88,38,0.19);
        color:${({theme})=>theme.colors.mainColor};
        border: solid 3px;
        border-color: ${({theme})=>theme.colors.mainColor};
        transition: all 0.1s;
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
        transition: all 0.2s;
    }
    &:active{
        color: ${({theme})=>theme.colors.white};
        background-color:${({theme})=>theme.colors.mainColor};
        transition: all 0.2s;
    }
`;
const JoinMembership=()=>{
    const navigate=useNavigate();
    // const [formData,setFormData]=useState({
    //     name:'',
    //     studentNumber:'',
    //     id:'',
    //     password:'',
    //     password2:'',
    //     position:''
    // });
    const [formData, setFormData] = useState({
        memberId: "",
        name: "",
        studentNumber: "",
        // userPhoto: '',
        password1: "",
        password2: "",
        currentPosition: "",
        year: 0,
        introduction: "",
        part: ""
      });
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    
    const handlePositionChange=(e)=>{
        const {value}=e.target;
        setFormData({
            ...formData,
            position:value
        });
    };

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        
        alert('회원가입 성공~');
        dispatch(userJoinMembership(formData));
        navigate('/login');
    }
    
    //chat 시작
    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []); // 빈 배열을 전달하여 페이지가 로드될 때 한 번만 실행되도록 함
    
    // formData가 변경될 때마다 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);
    // chat 끝


        // localStorage
        // useEffect(()=>{
        //     if(formData.name == 'null'){
        //         return 'name is null'
        //     }
        //     const storedValue=localStorage.getItem('formData');
        //     if(formData){
        //         setFormData(storedValue);
        //     }
        // },[])

    // const handleFormSubmit=async(e)=>{
        //     e.preventDefault();
        //     try{
            //         const response=await axios.post('백엔드 엔드포인트')
            //         // 회원가입이 성공하면 서버로부터 받은 응답 처리하는 로직 추가
            //         console.log(response.data);
    //         // 성공한 경우 서버로부터 받은 데이터 출력
    //     }catch(error){
    //         // 회원가입이 실패하면 나는 에러 처리
    //         console.error('Error during joinMembership : ',error);
    //     }
    // };

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
                    <form 
                        // onSubmit={handleFormSubmit}
                        onSubmit={handleFormSubmit}
                        style={{margin:'0px'}}
                        >
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
                                onChange={handleInputChange}
                                required
                                placeholder='비밀번호를 다시 작성해주세요.'/>
                        </JoinInputDiv>
                        <JoinInputDiv 
                            className='positionDiv'
                            style={{
                                justifyContent:'left',
                                flexWrap:'wrap',
                                gap:'1.9vw',
                            }}
                        >
                            <p>활동</p>
                            <div 
                                onChange={handleInputChange}
                                className='position'
                                style={{
                                    justifyContent:'space-between'
                                }}
                            >
                                <JoinInputPosition
                                    type='button'
                                    name='babylion'
                                    value='babylion'
                                    onClick={handlePositionChange}
                                    required
                                >아기사자</JoinInputPosition>
                                <JoinInputPosition
                                    type='button'
                                    name='manager'
                                    value='manager'
                                    onClick={handlePositionChange}
                                    required
                                >운영진</JoinInputPosition>
                            </div>
                        </JoinInputDiv>
                    </form>
                    <div className='joinButton'>
                        <div className='empty'/>
                        <Link to={'/login'}>
                            <JoinButton
                                type='submit'
                                // disabled={loading}
                                onClick={handleFormSubmit}
                            >
                                회원가입
                                {/* {loading ? '가입중...':'가입하기'} */}
                                {user.status === 'loading' && <p>Loading...</p>}
                                {user.status === 'failed' && <p>Error: {user.error}</p>}
                            </JoinButton>
                        </Link>
                    </div>
                </JoinContainer>
                <Stars />
            </Container>
        </>
    );
};

export default JoinMembership