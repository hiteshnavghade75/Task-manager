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

const getTasksCtrl = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteTaskCtrl = async (req, res) => {
    const result = await Task.deleteOne({_id : req.params.id})
    res.send(result)
}

module.exports = { addTaskCtrl, getTasksCtrl, deleteTaskCtrl };