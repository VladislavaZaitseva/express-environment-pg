function isValidEnvironmentId(request, response, next) {
    const { id } = request.params;

    if (isNaN(id)) throw new Error('your id not a number');
    if (id < 0) throw new Error('Your ID negative')
    next()
};

function isValidEnvironmentBody(request, response, next) {
    const { label, category, priority } = request.body;
    if (!label) throw new Error('label is empty')
    if (!category) throw new Error('category is empty')
    if (!priority) throw new Error('priority is empty')

    if (isNaN(label)) throw new Error('label is not a letter')
    if (isNaN(category)) throw new Error('category is not a letter')
    if (isNaN(priority)) throw new Error('priority is not a number')

    if (priority) throw new Error('priority ')

    next()
};

module.exports = {isValidEnvironmentId, isValidEnvironmentBody}