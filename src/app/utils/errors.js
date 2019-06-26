module.exports = {
    handleError: function(res, message, code) {
        res.status(code || 500).json({ "error": message });
    }
};