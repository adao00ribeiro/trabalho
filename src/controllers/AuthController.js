const AuthService = require("./../services/Usuarios/AuthService")
 class AuthController {
    async handle(req, res) {
        const { email, password } = req.body;
        const service = new AuthService();
        return res.json(await service.execute(email, password ))
    }
}

module.exports =AuthController;