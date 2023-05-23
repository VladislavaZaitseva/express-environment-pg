const express = require('express');
const { getAllEnvironment, getSkillByID } = require('../service/environment.service')
const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllEnvironment()
    response.send(data)
});

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data =await getSkillByID(id);
        response.send(data)
    } catch (error) {
        response.send(error.message)
    }
});


module.exports = route