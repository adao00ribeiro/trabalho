const Prisma = require('../../../db/prisma');

    async function CreateReceitaService(name,email,senha){
        
      return  await Prisma.receita.create({
            data:{
                name,
                email,
                senha
            }
        });
    }

module.exports = {CreateReceitaService};