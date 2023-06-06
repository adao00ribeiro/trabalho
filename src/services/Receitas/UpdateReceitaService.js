const Prisma = require('../../../db/prisma');

class UpdateReceitaService {

    async execute(id,name,email,senha){
      return  await Prisma.receitas.update({
        where:{id},
        data:{
            name,
            email,
            senha
        }
      });
    }
}

module.exports = UpdateUsuarioService;