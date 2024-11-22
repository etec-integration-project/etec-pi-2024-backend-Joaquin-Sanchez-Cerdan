import { Request, Response } from 'express';
import { AppDataSource } from '../persistance/db';
import { User } from '../persistance/user';

export const addUserToDB = async (req: Request, res: Response) => {
    console.log("Datos:", req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    try {
            const newUser = new User(username, email, password, password2);

            try {
                await AppDataSource.manager.save(newUser);

                return res.status(201).json({ message: 'Te registraste' });
            } catch (error) {
                console.error('Error al registrarse:', error);
                return res.status(401).json({ error: 'Error' });
            }
        } catch (err) {
        console.error('Error al registrarse:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }  
};
