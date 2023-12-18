const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require("cors");
const db = require('./db/config');

const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter');

PORT=5000

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}))

// app.use(express.urlencoded({extended : true}))


app.use(express.json());
app.use(cors())

app.use('/user', userRouter);
app.use('/task', taskRouter)

app.listen(PORT,()=>{
    console.log(`Server listening...`)
});