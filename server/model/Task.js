const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    taskName: {type: String, required: true},
    userId : {type : String}
});

const Task = mongoose.model('Task', taskSchema);

module.exports =  Task;