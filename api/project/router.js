const router = require('express').Router()

const Projects = require('../project/model')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.find()
    res.status(200).json(isTrue(projects))
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Projects.create(req.body)
    res.status(201).json(isTrue([newProject])[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

const isTrue = (projects) => {
  return projects.map((proj) => ({
    ...proj,
    project_completed: Boolean(proj.project_completed)
  }))
}

module.exports = router
