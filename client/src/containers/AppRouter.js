import '../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import UserRegister from '../components/UserRegister';
import UserLogin from '../components/UserLogin';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import UpdateTask from '../components/UpdateTask';
import PrivateComponent from '../components/PrivateComponent';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route element={<PrivateComponent />}>
                        <Route path='/add-task' element={<AddTask />} />
                        <Route path='/update-task/:id' element={<UpdateTask />}></Route>
                    </Route>

                    <Route path='/register' element={<UserRegister />} />
                    <Route path='/login' element={<UserLogin />} />
                    <Route path='/' element={<TaskList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
