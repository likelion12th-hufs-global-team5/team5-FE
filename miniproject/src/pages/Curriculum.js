import React from "react";
import { Link } from "react-router-dom";

const Curriculum = (props) => {

    return(
        <>
            <h1>Curriculum page</h1>
            <Link to={'/'}><h3>go to main</h3></Link>
        </>
    );
};

export default Curriculum