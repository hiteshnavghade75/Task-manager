import '../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import UserRegister from '../components/UserRegister';
import UserLogin from '../components/UserLogin';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import UpdateTask from '../components/UpdateTask';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/register' element={<UserRegister/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/' element={<TaskList/>} />
          <Route path='/add-task' element={<AddTask/>} />
          <Route path='/update-task/:id' element={<UpdateTask/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
