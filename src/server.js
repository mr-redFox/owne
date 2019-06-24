const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// init express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json({ limit: '2mb' }));


// use routes
app.use('/', require('./app/routes/common'));

// use static
app.use(express.static(path.resolve(__dirname, '../public')));

// handle 404 (user errors)
app.use((req, res, next) => {
    res.status(404).send(`<h2>Oops 404</h2> <h3>We think you are lost!</h3>`);
});

// lisen server
const PORT = process.env.PORT || 4900;
app.listen(PORT, () => {
    console.log(`app started on ${PORT}`);
});