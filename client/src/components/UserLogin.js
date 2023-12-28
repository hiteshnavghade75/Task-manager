import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from '../state/index';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await dispatch(actionCreators.loginUser(formData));
            const user = response.data;
            console.log(user);
            localStorage.setItem('token', user);
            navigate('/');
            window.location.reload();
            toast.success("User Logged In Successfully");
        } catch (error) {
            console.error("Error during login:", error);
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
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        }

        if (!formData.password.trim()) {
            errors.password = "Password is required";
        }

        return errors;
    };

    return (
        <form className="register-box" onSubmit={handleLogin}>
            <h2 className="register-heading">Login User</h2>
            <input
                type="text"
                placeholder="Enter email"
                className="input-box"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <input
                type="password"
                placeholder="Enter password"
                className="input-box"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}

            <button type="submit" className="signup-button">Login</button>
        </form>
    );
};

export default UserLogin;
