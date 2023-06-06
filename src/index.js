//includes 
const express = require('express');

const routes = require('./routes');
//---------------------------------------------------
const server = express();
const porta = 8080;
//-----------------
server.use(express.json());

server.use(routes);
//-----------------

server.use((err, req, res, next) => {
    if(err instanceof Error){
       return res.json("erro")
    }
    return res.status(500).json({
        status: "error",
        message: "internal server error"
    })
  
})
server.listen(porta,()=>{
    console.log("SERVIDOR INICIADO");
});
