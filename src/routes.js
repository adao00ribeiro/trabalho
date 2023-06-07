const express = require('express');
const Router = express.Router;
const router = Router();
const IsAuthenticated = require("./middlewares/IsAuthenticated")
const UsuarioController = require('./controllers/UsuarioController');
const {CreateHandle,ListHandle,DeleteHandle} = require('./controllers/ReceitaController');
const AuthController = require('./controllers/AuthController');


const controller = new UsuarioController();
const authcontroller = new AuthController();





// rotas de usuarios  post,get,put,delete
router.post('/usuarios',controller.CreateHandle);
router.get('/usuarios',controller.ListHandle);
router.put('/usuarios',controller.UpdateHandle);
router.delete('/usuarios',controller.DeleteHandle);
//session 
router.post('/session', authcontroller.handle)
//receita
router.post('/receitas',  CreateHandle);

router.get('/receitas',ListHandle);

router.put('/receitas', (req , res)=>{
    res.send({
        session :"receita put"
    })
})
router.delete('/receitas', DeleteHandle)


module.exports = router;