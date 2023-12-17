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

const getTaskByIdCtrl = async (req, res) => {
    try {
      const result = await Task.findOne({ _id: req.params.id });
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'No Record Found' });
      }
    } catch (error) {
      console.error('Error fetching task by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

const deleteTaskCtrl = async (req, res) => {
    try {
      const result = await Task.deleteOne({ _id: req.params.id });
      res.status(result.deletedCount ? 200 : 404).json({
        message: result.deletedCount ? 'Task deleted successfully' : 'Task not found'
      });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

const updateTaskCtrl = async (req,res) => {
    let result = await Task.updateOne(
        {_id : req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result)
}

module.exports = { addTaskCtrl, getTasksCtrl, deleteTaskCtrl, updateTaskCtrl, getTaskByIdCtrl };