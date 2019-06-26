const app = require('express').Router();
const { handleError } = require('../utils/errors');

const users = [];

app.get('/', (req, res) => {
    
    res.render('main', {
        section: 'Sign in section'
    });
});

app.post('/signin', (req, res) => {
    const {email, pass} = req.body;

    if(email != 'upp')
        handleError(res, {type: 'email', resason: 'Not valid'}, 401);

    users.push({email, pass});
    res.send('success');
})

module.exports = app;