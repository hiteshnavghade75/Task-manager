import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload();
        toast.success("Logout Successfully")
    }
    return<div onClick={logout} className="logout">
        Logout
    </div>
}

export default Logout