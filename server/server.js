require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const db = require('./db');

// API file for interacting with DB
// const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// API location
// app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
	console.log(process.env.DB_USER);
    // res.sendFile(path.join(__dirname, 'dist/index.html'));
    db('recruits').where('recruit_id', 1).then((row) => res.send(row));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));