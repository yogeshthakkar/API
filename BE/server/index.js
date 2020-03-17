const mongoos = require(`mongoose`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);//express middleware that allows request from other domain
const express = require('express');
const keys = require('./data');
const app = express();

const router = require('../routes/userRoutes')

const url = keys.URL ;
// Server configuration
const hostname = 'localhost';
const port = 3001;

mongoos.connect( url , { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())

//print message when server send resonse
app.get('/', (req, res) => {
    res.send('Hello world!!!');
})

app.use('/', router);
app.use('/insert',router);
app.use('/search',router);

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));

module.exports = app;