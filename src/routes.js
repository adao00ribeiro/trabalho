const express = require('express');
const Router = express.Router;
const router = Router();
const UsuarioController = require('./controllers/UsuarioController');

const controller = new UsuarioController();
// rotas de usuarios  post,get,put,delete
router.post('/usuarios',controller.CreateHandle);

router.get('/usuarios',controller.ListHandle);
router.put('/usuarios',(req , res)=>{
    res.send("put")
})
router.delete('/usuarios',(req , res)=>{
    res.send("delete")
})

module.exports = router;