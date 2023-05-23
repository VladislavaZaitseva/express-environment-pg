const { getAllEnvironmentDB,getSkillByIDDB } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB()

    return data
};

async function getSkillByID(id) {
    const data = await getSkillByIDDB(id)
    return data
}


module.exports = { getAllEnvironment, getSkillByID }