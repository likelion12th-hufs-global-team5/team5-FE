import React from 'react';
import {Link} from 'react-router-dom';
import styled  from 'styled-components';
import theme from '../styles/theme';

import {BsInstagram} from 'react-icons/bs';
import {BsVimeo} from 'react-icons/bs';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    align-items:center;
    
    position:fixed;
    bottom:30px;
    margin: 0 auto;


    color:${({theme})=>theme.colors.mainColor};
    font-family:${({theme})=>theme.fonts.english};
    font-size:${({theme})=>theme.fontSize.footerFont};

    cursor:pointer;

    .icon{
        margin-right:18px;
    }
`;
const Instagram=styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    align-items:center;

    margin-right:60px;
`;
const Velog=styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    align-items:center;
`;

const Footer=()=>{
    const instagramUrl='https://www.instagram.com/hufsglobal_likelion/?hl=ko';
    const velogUrl='https://velog.io/@hufsglobal09/posts';
    
    return(
        <>
            <Container>
                <Instagram onClick={()=>{window.open(instagramUrl)}}>
                    <BsInstagram className='icon'/>
                    instagram HUFS GLOBAL
                </Instagram>
                <Velog onClick={()=>{window.open(velogUrl)}}>
                    <BsVimeo className='icon'/>
                    velog HUFS GLOBAL
                </Velog>
            </Container>
        </>
    )
};

export default Footer;