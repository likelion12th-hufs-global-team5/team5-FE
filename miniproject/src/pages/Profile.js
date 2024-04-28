import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {

    return(
        <>
            <h1>Profile page</h1>
            <Link to={'/'}><h3>go to main</h3></Link>
        </>
    );
};

export default Profile