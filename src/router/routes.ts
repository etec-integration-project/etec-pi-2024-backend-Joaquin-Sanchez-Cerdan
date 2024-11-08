import express from 'express';
import { addDogsToDB } from '../controler/addDogsToDB';
import { addUserToDB } from '../controler/addUserToDB';
import { loginUser } from '../controler/loginUser';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

//perros
mainRouter.post('/perros/agregar', addDogsToDB);
//usuario
mainRouter.post('/registro', addUserToDB);
mainRouter.post('/login', loginUser)

export { mainRouter };  