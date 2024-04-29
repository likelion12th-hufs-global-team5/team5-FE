import { Link, Outlet, matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState,useEffect } from 'react';

import routes from './routes.jsx';
import { useSelector } from 'react-redux';
import { selectTitle } from './redux/appSlice.js';
import classnames from 'classnames';

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Title=styled.p`
    font-size:22px;
    font-weight:700;

    color:#fe5858;
`;

const BackButton=styled.p`
    font-size:16px;
    font-weight:500;

    color:#3EB7EC;
`;

const TITLE_DEFAULT=true;
const PROJECT_DEFAULT=false;
const CURRICULUM_DEFAULT=false;
const PROFILE_DEFAULT=false;
const BACKWARD_DEFAULT='/'

const Wrapper = ({})=>{
    const navigate=useNavigate();
    const location=useLocation();

    const [showTitle,setShowTitle]=useState(TITLE_DEFAULT);
    const [showProject,setShowProject]=useState(PROJECT_DEFAULT);
    const [showCurriculum,setShowCurriculum]=useState(CURRICULUM_DEFAULT);
    const [showProfile,setShowProfile]=useState(PROFILE_DEFAULT);
    const [backwardUrl,setBackwardUrl]=useState(BACKWARD_DEFAULT);

    const title=useSelector(selectTitle);

    useEffect(()=>{
        const result=matchRoutes(routes, location.pathname);

        if (result.length<1){
            return ;
        }

        const {route}=result[0];

        if (route){
            setShowProject(route.project ?? PROJECT_DEFAULT);
            setShowCurriculum(route.curriculum ?? CURRICULUM_DEFAULT);
            setShowProfile(route.profile ?? PROFILE_DEFAULT);
            setBackwardUrl(route.previous ?? BACKWARD_DEFAULT);
        }else{
            setShowProject(PROJECT_DEFAULT);
            setShowCurriculum(CURRICULUM_DEFAULT);
            setShowProfile(PROFILE_DEFAULT);
            setBackwardUrl(BACKWARD_DEFAULT);
        }
    },[location]);

    useEffect(()=>{
        const result=matchRoutes(routes,location.pathname);

        if(result.length<1){
            return;
        }
        const {route}=result[0];

        if(route.customTitle){
            setShowTitle(title ?? route.title ?? TITLE_DEFAULT);
        }
    },[location,title]);

    const onBackButtonClick=(event)=>{
        navigate(backwardUrl);
    };

    return(
        <>
            <Container>
                <BackButton 
                onClick={onBackButtonClick()}
                className={classnames({hidden:backwardUrl === false,})}
                >
                    뒤로가기
                </BackButton>
                <Title>{showTitle}</Title>
                <Outlet />
            </Container>
        </>
    )
};

export default Wrapper;