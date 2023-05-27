const Prisma = require('./../../../db/prisma');

class CreateUsuarioService {

    async execute(name,email,senha){
        
      return  await Prisma.usuario.create({
            data:{
                name,
                email,
                senha
            }
        });
    }
    
}

module.exports = CreateUsuarioService;