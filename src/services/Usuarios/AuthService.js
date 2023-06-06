const GetUserByEmailService = require('./GetUserByEmailService')
const jwt = require('jsonwebtoken');
 class AuthUserService {


    async execute( email, password ) {

        const serviceUser = new GetUserByEmailService();
        const user = await serviceUser.execute(email);

        if (!user) {
            throw new Error("Email nao existe");
        }
        const passwordMatch = password == user.password;

        if (!passwordMatch) {
            throw new Error("Senha Incorreta");
        }
        console.log(user)
        //gerar token
     
        const token = jwt.sign(
            {
                id: user.id ,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

        return {
            token: token
        }
    }
}

module.exports = AuthUserService;