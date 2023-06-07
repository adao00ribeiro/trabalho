const {CreateReceitaService} = require("./../services/Receitas/CreateReceitaService")
const {ListReceitasServices} = require("./../services/Receitas/ListReceitaService")
const {DeleteReceitaService} = require("./../services/Receitas/DeleteReceitaService")


    async function CreateHandle(req, res) {
        const {nome,descricao,tempodepreparo,usuarioId} = req.body;
        res.send( await CreateReceitaService(nome,descricao,tempodepreparo,usuarioId));
    }
    async function UpdateHandle(req, res) {
        const {id,nome,email,senha} = req.body;
        const service = new UpdateReceitaioService();
        res.send( await service.execute(id,nome,email,senha));
    }
    async function ListHandle(req, res) {
        const {usuarioId} = req.query;
        res.send( await ListReceitasServices(usuarioId));
    }
    async function DeleteHandle(req, res) {
        const {id} = req.query;
        return res.send( await DeleteReceitaService(id));
    }

module.exports = {
    CreateHandle,
    ListHandle,
    DeleteHandle
};