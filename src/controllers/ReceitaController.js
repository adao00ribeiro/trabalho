const DeleteUsuarioService = require("../services/Usuarios/DeleteUsuarioService");
const ListUsuarioService = require("../services/Usuarios/ListUsuarioService");
const UpdateUsuarioService = require("../services/Usuarios/UpdateUsuarioService");
const {CreateReceitaService} = require("./../services/Receitas/CreateReceitaService")

    async function CreateHandle(req, res) {
        const {name,descricao,tempodepreparo} = req.body;
        res.send( await CreateReceitaService(name,descricao,tempodepreparo));
    }
    async function UpdateHandle(req, res) {
        const {id,nome,email,senha} = req.body;
        const service = new UpdateUsuarioService();
        res.send( await service.execute(id,nome,email,senha));
    }
    async function ListHandle(req, res) {
       const service = new ListUsuarioService();
        res.send( await service.execute());
    }
    async function DeleteHandle(req, res) {
        const {id} = req.body;
        const service = new DeleteUsuarioService();
        res.send( await service.execute(id));
    }

module.exports = {
    CreateHandle
};