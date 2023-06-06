const DeleteUsuarioService = require("../services/Usuarios/DeleteUsuarioService");
const ListUsuarioService = require("../services/Usuarios/ListUsuarioService");
const UpdateUsuarioService = require("../services/Usuarios/UpdateUsuarioService");
const CreateUsuarioService = require("./../services/Usuarios/CreateUsuarioService")

class UserController  {

    async CreateHandle(req, res) {
        const {nome,email,senha} = req.body;
        const service = new CreateUsuarioService();
        res.send( await service.execute(nome,email,senha));
    }
    async UpdateHandle(req, res) {
        const {id,nome,email,senha} = req.body;
        const service = new UpdateUsuarioService();
        res.send( await service.execute(id,nome,email,senha));
    }
    async ListHandle(req, res) {
       const service = new ListUsuarioService();
        res.send( await service.execute());
    }
    async DeleteHandle(req, res) {
        const {id} = req.body;
        const service = new DeleteUsuarioService();
        res.send( await service.execute(id));
    }
}

module.exports =UserController;