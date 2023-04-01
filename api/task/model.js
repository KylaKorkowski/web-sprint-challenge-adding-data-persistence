const db = require('../../data/dbConfig')

function getAllTasks() {
  return db('tasks as t')
    .select('t.*', 'p.project_name', 'p.project_description')
    .join('projects as p', 'p.project_id', 't.project_id')
}

function createTask(task) {
  return db('tasks')
    .insert(task)
    .returning('*')
    .then(([newTask]) => newTask)
}

module.exports = { getAllTasks, createTask }
