import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    }, [])

    const auth = localStorage.getItem('token')

    const getTasks = async () => {
        let result = await fetch("http://localhost:5000/task/get-tasks", {
            headers: {
                authorization: localStorage.getItem('token')
            }
        });
        result = await result.json();
        setTasks(result)
    }

    const deleteTask = async (id) => {
        if(auth){
            let result = await fetch(`http://localhost:5000/task/delete/${id}`, {
                method: 'Delete',
            })
            result = await result.json()
    
            if (result) {
                alert("Record id deleted")
                getTasks()
            }
        }else{
            alert("Not Authorized")
        }
    }

    return <div className="bg-body-secondary">
        <h1 className="task-list">Task List</h1>

        <ul className="list-group list-group-flush">
            {tasks.length > 0 ? tasks.map((item, index) =>
                <li className="list-group-item p-3" key={index}>
                    {item.taskName}
                    <span className="edit-delete">
                        <span onClick={() => deleteTask(item._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                        </span>
                        
                        <span>
                        <Link to={"/update-task/" + item._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                        </Link>
                        </span>
                    </span>
                </li>)
                :
                <h1>No Tasks Found</h1>
            }
        </ul>
    </div>
}

export default TaskList;