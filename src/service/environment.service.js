const { getAllEnvironmentDB, getSkillByIDDB, createEnvDB, upDataEnvDB, deleteEnvironmentByIdDB, putchEnvironmentDB } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    if (!data.length) throw new Error('DB is empty');

    return data
};

async function createEnv(label, category, priority) {
    const data = await createEnvDB(label, category, priority);
    if (!data.length) throw new Error('object not created');

    return data
};

async function getSkillByID(id) {
    const data = await getSkillByIDDB(id);
    if (!data.length) throw new Error('this ID not found');

    return data
};

async function upDataEnv(id, label, category, priority) {
    const data = await upDataEnvDB(id, label, category, priority);
    if (!data.length) throw new Error('ID not found');

    return data
};

async function deleteEnvironmentById(id) {
    const data = await deleteEnvironmentByIdDB(id);
    if (!data.length) throw new Error('ID not found');

    return data
};

async function putchEnvironment(id, clientData) {
    const data = await deleteEnvironmentByIdDB(id, clientData);
    if (!data.length) throw new Error('ID not found');

    return data
};

module.exports = {
    getAllEnvironment,
    getSkillByID,
    createEnv,
    upDataEnv,
    deleteEnvironmentById,
    putchEnvironment
};