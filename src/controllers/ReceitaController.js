const {CreateReceitaService} = require("./../services/Receitas/CreateReceitaService")
const {ListReceitasServices} = require("./../services/Receitas/ListReceitaService")
const {DeleteReceitaService} = require("./../services/Receitas/DeleteReceitaService")
const {UpdateReceitaService} = require("./../services/Receitas/UpdateReceitaService")

    async function CreateHandle(req, res) {
        const {nome,descricao,tempodepreparo,usuarioId} = req.body;
        res.send( await CreateReceitaService(nome,descricao,tempodepreparo,usuarioId));
    }
    async function UpdateHandle(req, res) {
        const {id,nome,descricao,tempodepreparo} = req.body;

      
        res.send( await UpdateReceitaService(id,nome,descricao,tempodepreparo));
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
    UpdateHandle,
    DeleteHandle
};