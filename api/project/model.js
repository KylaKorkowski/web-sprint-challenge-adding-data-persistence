const db = require('../../data/dbConfig')

function find() {
    return db('projects')
}

function findById(project_id) {
    return db('projects').where({ project_id })
}

function create(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return findById([project_id])
        })
}

module.exports = {
    find,
    findById,
    create,
} 