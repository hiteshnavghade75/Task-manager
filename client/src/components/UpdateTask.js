import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTask = () => {

    const [taskName, setTaskName] = useState("");
    const params = useParams();
    const navigate = useNavigate()

    useEffect(()=> {
        getTaskDetails()
    },[])

    const getTaskDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/task/get-tasks/${params.id}`)
        result = await result.json()
        setTaskName(result.taskName)
    }

    const updateTask = async () => {
        let result = await fetch(`http://localhost:5000/task/update/${params.id}`, {
            method : "Put",
            body : JSON.stringify({taskName}),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        result = await result.json()
        console.warn(result)
        navigate("/")
    }
    
    return<div className='product'>
       <h2 className="register-heading"> Update Task </h2>
        <input type='text' placeholder='Enter product name' className='input-box'
        value={taskName} onChange={(e) => {setTaskName(e.target.value)}}
        />

        <button onClick={updateTask} className='signup-button'>Update Task</button>
    </div>
}

export default UpdateTask;