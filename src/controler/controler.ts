import { Response, Request } from 'express'
import { AppDataSource, pdb} from '../persistance/db';
import { User } from '../persistance/user';
import { Dogs } from '../persistance/dogs';

//perros
export const getDogs = async (_: Request, res: Response) => {
    const dogs = await AppDataSource.manager.find(Dogs);
    res.json(dogs);
}

export const addDogsToDB = async () => {
    pdb.map(async (p: Dogs) => {
        const newDog = new Dogs(p.img, p.name, p.race, p.genre, p.age, p.price);
        await AppDataSource.manager.save(newDog);
    });
}

//usuario
export const getUser = async (_: Request, res: Response) => {
    const user = await AppDataSource.manager.find(User);
    res.json(user);
}

export const addUserToDB = async (req: Request, res: Response) => {
    const { userData } = req.body;
    const username = userData.username;
    const email = userData.email;
    const password = userData.password;
    const password2 = userData.password2;

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

