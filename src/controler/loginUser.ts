import { Response, Request } from 'express'
import { AppDataSource } from '../persistance/db';
import { User } from '../persistance/user';

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = await AppDataSource.manager.findOne(User, { where: { email, password } });
    if (user) {
        res.json({
            success: true,
            msg: "Iniciaste sesión",
        });       
    } else {
        res.status(401).json({
            success: false,
            msg: "Error al iniciar sesión"
        })
    }
}

