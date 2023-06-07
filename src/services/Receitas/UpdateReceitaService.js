const Prisma = require('../../../db/prisma');

    async function UpdateReceitaService(id,nome,descricao,tempodepreparo){
      return await Prisma.receita.update({
        where:{id:id},
        data:{
         
          nome:nome,
          descricao:descricao,
          tempodepreparo:Number.parseInt(tempodepreparo),
         
        }
      });
    }

module.exports = {UpdateReceitaService};