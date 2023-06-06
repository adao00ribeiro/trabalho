const Prisma = require('../../../db/prisma');

class ListReceitaService {
    async execute(){
      return  await Prisma.usuario.findMany();
    }
}

module.exports = ListUsuarioService;