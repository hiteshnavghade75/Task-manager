import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../state/index';

const UserRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleRegister = async () => {
        try {
            const response = await dispatch(actionCreators.registerUser(formData));
            const user = response.data;
            localStorage.setItem('user', JSON.stringify(user))
            alert("Registered Successfully");
            navigate('/login');
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
        console.log(formData)
    };

    return (
        <div className="register-box">
            <h2 className="register-heading"> Register User </h2>
            <input
                className="input-box"
                type="text"
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
                name="name" 
            />

            <input
                className="input-box"
                type="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
                name="email" 
            />

            <input
                className="input-box"
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
                name="password"
            />

            <button type="button" className="signup-button" onClick={handleRegister}>
                Sign Up
            </button>
        </div>
    );
};

export default UserRegister;
