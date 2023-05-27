const CreateUsuarioService = require("./../services/Usuarios/CreateUsuarioService")

class UserController {

    async CreateHandle(req, res) {
        const {nome,email,senha} = req.body;
        const service = new CreateUsuarioService();
        res.send( await service.execute(nome,email,senha));
    }
    async UpdateHandle(req, res) {
        
    }
    async ListHandle(req, res) {
       
    }
    async DeleteHandle(req, res) {
       
    }
}

module.exports =UserController;