const db = require('../../data/dbConfig');

const find = () => db('resources');

const findById = async (resource_id) => {
  const resource = await db('resources').where({ resource_id }).first();
  return resource;
};

const create = async (resource) => {
  const [resource_id] = await db('resources').insert(resource);
  const newResource = await findById(resource_id);
  return newResource;
};

module.exports = {
  find,
  findById,
  create,
};
