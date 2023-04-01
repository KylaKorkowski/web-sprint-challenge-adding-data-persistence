const db = require('../../data/dbConfig')

function find() {
    return db('resources');
}

function findById(resource_id) {
    return db('resources')
    .where({ resource_id })
    .first()
}

function create(resource) {
        return db('resources')
            .insert(resource)
            .then(([resource_id]) => {
                return findById(resource_id)
            })
}

module.exports = {
    find,
    findById,
    create,
} 