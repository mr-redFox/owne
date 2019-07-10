
const response = (res, message, code) => res.status(code || 500).json(message);

const sendError = (res, message, code) => response(res, {'error': message}, code || 400);

module.exports = { sendError, response };
