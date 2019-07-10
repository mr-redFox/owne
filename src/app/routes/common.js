const app = require('express').Router();
const { sendError } = require('../utils/response');
const User = require('../models/user');

const printUsers = (res, users) => {
    res.render('users', { users });
}

app.get('/', (req, res) => {
    
    res.render('main', {
        section: 'Register user'
    });
});

app.get('/users', (req, res) => {

    User
    .find({})
    .then(data => printUsers(res, data))
    .catch(err => sendError(res, err, 404));
    
});

app.post('/signup', (req, res) => {
    const {email, pass} = req.body;

    const user = new User({
        email,
        pass,
        pressets: [{
            name: 'super presset',
            date: Date.now()
        }],
        active: true
    });

    user.save();

    return res.redirect('/');
})

module.exports = app;
