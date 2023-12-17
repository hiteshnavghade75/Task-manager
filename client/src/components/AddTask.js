import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../state/index';

const AddTask = () => {

    const [formData, setFormData] = useState({taskName : ""});
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId =  JSON.parse(localStorage.getItem('user'))._id;

    const addTask = async () => {

        if(!formData.taskName ){
            setError(true)
            return false
        }
    
        try {
            await dispatch(actionCreators.addTask({
                ...formData,
                userId : userId
            }));
            navigate('/');
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };
    
    return<div className='product'>
        <h2 className="register-heading"> Add Task </h2>
        <input type='text' placeholder='Enter product name' className='input-box' name='taskName'
        value={formData.taskName} onChange={(e) => handleChange(e)}
        />
        {error && !formData.taskName && <span className='invalid-input'>Enter task name</span>}

        <button onClick={addTask} className='signup-button'>Add Task</button>
    </div>
}

export default AddTask;