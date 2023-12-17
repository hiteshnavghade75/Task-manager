const express =require("express");
const Router = express.Router();
const { addTaskCtrl, getTasksCtrl, deleteTaskCtrl, updateTaskCtrl, getTaskByIdCtrl } = require('../controllers/taskController');


Router
  .route('/add-task')
  .post(addTaskCtrl)

Router
  .route('/get-tasks')
  .get(getTasksCtrl)

Router
  .route('/get-tasks/:id')
  .get(getTaskByIdCtrl)

Router
  .route('/delete/:id')
  .delete(deleteTaskCtrl)

Router
  .route('/update/:id')
  .put(updateTaskCtrl)

module.exports = Router;