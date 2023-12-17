import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from '../state/index';
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = async () => {
        console.log("login clicked")
        try {
            const response = await dispatch(actionCreators.loginUser(formData));
            const user = response.data
            console.log(user)
            localStorage.setItem('token', user)
            alert("User Logged In Successfully");
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
        console.log(formData)
    };

    return<div className="register-box">
        <h2 className="register-heading"> Login User </h2>
        <input type="text" placeholder="Enter email" className="input-box" name="email" value={formData.email} onChange={handleChange}/>

        <input type="password" placeholder="Enter password" className="input-box" name="password" value={formData.password} onChange={handleChange}/>
        
        <button type="button" className="signup-button" onClick={handleLogin}>Login</button>
    </div>
}

export default UserLogin ;