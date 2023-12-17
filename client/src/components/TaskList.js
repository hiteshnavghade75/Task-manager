import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = async () => {
        let result = await fetch("http://localhost:5000/task/get-tasks", {
            headers : {
                authorization : JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setTasks(result)
    }

    const deleteTask = async (id) => {
        console.log(id)
        let result = await fetch(`http://localhost:5000/task/delete/${id}`, {
            method : 'Delete',
        })
        result = await result.json()

        if(result){
            alert("Record id deleted")
            getTasks()
        }
    }

    return <div className="product-list">
        <h1>Task List</h1>
        {
            tasks.length > 0 ?  tasks.map((item, index) =>
                <ul key={item._id}>
                    <li>{item.taskName}</li>
                    <li>
                        <button onClick={() => deleteTask(item._id)}>Delete</button>
                        <Link to={"/update-task/"+item._id}>Update</Link>
                        </li>
                </ul>
            ) : <h1>No Tasks Found</h1>
        }
    </div>
}

export default TaskList;