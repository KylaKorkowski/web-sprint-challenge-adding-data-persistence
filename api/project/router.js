const router = require('express').Router()


const Projects = require('../project/model')

router.get('/', (req,res,next) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(isTrue(projects));
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req, res,next) => {
    Projects.create(req.body)
    .then((project) => {
        res.status(201).json(isTrue(project)[0])
    })
    .catch(error => {
    next(error)
    })
})


const isTrue = (projects) => {

    //PSEUDO
    //1.go through each item
    //2.look at project completed
    //2. if project completed true - set to false else leave at false


	return projects.map((proj) => ({

        
		...proj,


		project_completed: proj.project_completed ? true : false,
	}));
};

module.exports = router