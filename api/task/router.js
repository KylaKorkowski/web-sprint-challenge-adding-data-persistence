const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.find()
        .then(tasks => {
            res.json(isTrue(tasks))
        })
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.json(isTrue(task)[0])
        })
        .catch(next)
})




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack
    })
})

const isTrue = (tasks) => {
	return tasks.map((proj) => ({
		...proj,
		task_completed: proj.task_completed ? true : false,
	}));
};


module.exports = router