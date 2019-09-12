const express = require('express'); 
const helmet = require('helmet'); 
const carRouter = require('./car-dealer/carRouter'); 

// creating the server 
const server = express(); 

// header protector and specifying that we're gonna use json
server.use(helmet()); 
server.use(express.json()); 

//setting up router
server.use('/cars', carRouter)

// exporting so we can import to index.js
module.exports = server; 