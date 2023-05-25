const express = require('express');
const { getAllEnvironment,
    getSkillByID,
    createEnv,
    upDataEnv,
    deleteEnvironmentById,
    putchEnvironment } = require('../service/environment.service');

const { isValidEnvironmentId, isValidEnvironmentBody } = require('../helper/validation')
const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllEnvironment()
    response.send(data)
});

route.post('/', isValidEnvironmentId, isValidEnvironmentBody, async (request, response) => {
    try {
        const { label, category, priority } = request.body;
        const data = await createEnv(label, category, priority);
        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    }
});

route.get('/:id', isValidEnvironmentId, async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getSkillByID(id);
        response.send(data)
    } catch (error) {
        response.send(error.message)
    }
});

route.put('/:id',isValidEnvironmentBody, isValidEnvironmentId, async (request, response) => {
    try {
        const { id } = request.params
        const { label, category, priority } = request.body;
        const data = await upDataEnv(id, label, category, priority);
        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    };
});

route.delete('/:id', isValidEnvironmentId, async (request, response) => {
    try {
        const { id } = request.params
        const data = await deleteEnvironmentById(id);
        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    };
});

route.delete('/:id',isValidEnvironmentId,  async (request, response) => {
    try {
        const { id } = request.params
        const clientData = request.body;
        const data = await putchEnvironment(id, clientData);
        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    };
});
module.exports = route