import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload();
    }
    return<div onClick={logout} className="logout">
        Logout
    </div>
}

export default Logout