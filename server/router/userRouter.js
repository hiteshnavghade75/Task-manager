const express =require("express");
const Router = express.Router();
const { userRegisterCtrl, userLoginCtrl } = require('../controllers/userController');


Router
  .route('/register')
  .post(userRegisterCtrl)


Router
  .route('/login')
  .post(userLoginCtrl);
 

module.exports = Router;