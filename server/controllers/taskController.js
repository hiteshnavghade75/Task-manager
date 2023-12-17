const Task = require('../model/Task');

const addTaskCtrl = async (req, res) => {
    try {
        console.log(req.body)
        const task = new Task(req.body.task);
        const result = await task.save();
        res.status(201).json(result);
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { addTaskCtrl };