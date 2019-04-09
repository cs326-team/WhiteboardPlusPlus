const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/login.route');
// initialize our express app
const app = express();

app.use('/users', user);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});