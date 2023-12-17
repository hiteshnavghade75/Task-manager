const express =require("express");
const Router = express.Router();
const { addTaskCtrl } = require('../controllers/taskController');


Router
  .route('/add-task')
  .post(addTaskCtrl)

module.exports = Router;