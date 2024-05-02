import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const TestText=styled.p`
    font-weight:700;
    font-family:'Workbench';
`;

const BackwardText=styled.p`
    font-weight:500;
    font-family:'Noto Sans KR'
    color:#FE5826;
`;
const Main=()=>{

    return(
        <>
            <TestText>Main page</TestText>
            <Link to={'/login'}>
                <BackwardText>go to login</BackwardText>
            </Link>
        </>
    )
}

export default Main;