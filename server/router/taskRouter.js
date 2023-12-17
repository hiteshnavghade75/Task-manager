const express =require("express");
const Router = express.Router();
const { addTaskCtrl, getTasksCtrl, deleteTaskCtrl } = require('../controllers/taskController');


Router
  .route('/add-task')
  .post(addTaskCtrl)

Router
  .route('/get-tasks')
  .get(getTasksCtrl)

Router
  .route('/delete/:id')
  .delete(deleteTaskCtrl)

module.exports = Router;