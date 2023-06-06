const Prisma = require('../../../db/prisma');

class DeleteReceitaService {
    async execute(id){
     
      const usuario = await  Prisma.usuario.findUnique({
        where: { id }
      });
    
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      return   Prisma.usuario.delete({
        where:{id}
      });
    }
}

module.exports = DeleteUsuarioService;