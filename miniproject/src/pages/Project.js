import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

    return(
        <>
            <h1>Project Page</h1>
            <Link to={'/'}><h3>go to main</h3></Link>
        </>
    );
};

export default Project