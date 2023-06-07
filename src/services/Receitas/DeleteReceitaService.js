const Prisma = require('../../../db/prisma');


    async function DeleteReceitaService(id){
     
      const receitas = await  Prisma.receita.findMany({
        where: { usuarioId : 5 }
      });
 
      if (!receitas) {
        throw new Error('Usuário não tem nenhuma receita cadastrada');
      }
    const rece =    receitas.filter(element => {
        return element.id == id;
      });

      if(rece.length==0){
        throw new Error('receita nao pertence a esse usuario');
      }

      return await Prisma.receita.delete({
        where:{id : Number.parseInt(id)}
      });
    }

module.exports = {
  DeleteReceitaService
};