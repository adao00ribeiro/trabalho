const Prisma = require('./../../../db/prisma');

 class GetUserByEmailService {

    async execute(email) {
      const usuario =  await Prisma.usuario.findFirst({
        where: { email:email }
      });

      return usuario;
    }
}

module.exports = GetUserByEmailService;