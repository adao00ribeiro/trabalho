const Prisma = require('./../../../db/prisma');

class DeleteUsuarioService {
    async execute(id){

      const usuario = await  Prisma.usuario.findUnique({
        where: { id:id }
      });
    
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      return  await Prisma.usuario.delete({
        where:{id}
      });
    }
}

module.exports = DeleteUsuarioService;