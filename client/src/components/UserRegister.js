import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../state/index';
import toast from "react-hot-toast";

const UserRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const validationErrors = validateFormData();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            await dispatch(actionCreators.registerUser(formData));
            toast.success("Registered Successfully");
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
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: null,
        }));
        console.log(formData);
    };

    const validateFormData = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.password.trim()) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form className="register-box" onSubmit={handleRegister}>
            <h2 className="register-heading">Register User</h2>
            <input
                className="input-box"
                type="text"
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
                name="name"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <input
                className="input-box"
                type="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
                name="email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <input
                className="input-box"
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
                name="password"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}

            <button type="submit" className="signup-button">
                Sign Up
            </button>
        </form>
    );
};

export default UserRegister;

