//includes 
const express = require('express');
const routes = require('./routes');
//---------------------------------------------------
const server = express();
//-----------------
server.use(express.json());
server.use(routes);
//-----------------
const porta = 8080;

server.listen(porta,()=>{
    console.log("SERVIDOR INICIADO");
});
