import *as Yup from 'yup'
import User from '../models/User';
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

class SessionController {
    async store(req, res) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(req.body);

        const emailOrPasswordIncorrect = () => {
             return res.status(401).json({ error: 'certifique-se de que seu e-mail ou senha estejam correto;' })
        }
        
        if (!isValid) { //se não for valido
        return   emailOrPasswordIncorrect();
        }

        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {// Se meu usuário não existe
        return emailOrPasswordIncorrect();
        }

        const isSamePassword = await user.checkPassword(password)
        if(!isSamePassword) { //se não for a mesma senha
            return emailOrPasswordIncorrect();
        }


        return res.status(201).json({ 
            id : user.id,
            name : user.name,
            email,
            admin: user.admin,
            token: jwt.sign({id: user.id, name: user.name}, authConfig.secret,{
                expiresIn: authConfig.expiresIn
            }) //estou assinando o token usando o md5 aplicativo
            });
    }
}
export default new SessionController();