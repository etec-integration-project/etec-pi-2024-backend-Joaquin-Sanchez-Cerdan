import express from 'express';
import { addDogsToDB } from '../controler/addDogsToDB';
import { addUserToDB } from '../controler/addUserToDB';
import { loginUser } from '../controler/loginUser';
import { getPosts } from '../controler/getPosts'; 
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

//perros
mainRouter.post('/api/perros/agregar', addDogsToDB);
mainRouter.get('/api/perros/post', getPosts)
//usuario
mainRouter.post('/api/registro', addUserToDB);
mainRouter.post('/api/login', loginUser)

export { mainRouter };  