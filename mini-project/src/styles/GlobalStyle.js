import React from "react";
import { Global, css } from '@emotion/react';

const baseStyle=css`
    width:1280px;
    height:832px;

    background-color:#FA9677;
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;