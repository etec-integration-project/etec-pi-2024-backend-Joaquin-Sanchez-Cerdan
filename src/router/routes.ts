import express from 'express';
import {getUser, addUserToDB,loginUser, addDogsToDB, getDogs} from '../controler/controler';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

//perros
mainRouter.get('/perros', getDogs);
mainRouter.post('/perros/añadir', addDogsToDB);
//usuario
mainRouter.get('/usuarios', getUser);
mainRouter.post('/registro', addUserToDB);
mainRouter.post('/login', loginUser)

export { mainRouter };  