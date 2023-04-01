const router = require('express').Router()


const Resources = require('../resource/model')

router.get('/', (req, res, next) => {
    Resources.find()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

module.exports = router