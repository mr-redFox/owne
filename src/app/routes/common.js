const app = require('express').Router();
const { sendError } = require('../utils/response');
const User = require('../models/user');

app.get('/', (req, res) => {
    
    res.render('main', {
        section: 'Register user'
    });
});

app.get('/users', (req, res) => {
    const users = User.find({});
    console.log(users);

    res.end();
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
