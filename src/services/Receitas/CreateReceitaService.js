const Prisma = require('../../../db/prisma');

    async function CreateReceitaService(name,descricao,tempodepreparo,usuarioId){
        return  await Prisma.receita.create({
            data:{
                nome :name,
                descricao :descricao,
                tempodepreparo :tempodepreparo,
                usuarioId      : usuarioId
            }
        });
    }
module.exports = {CreateReceitaService};