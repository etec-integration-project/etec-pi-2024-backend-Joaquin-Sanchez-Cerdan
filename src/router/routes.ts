import express from 'express';
import {getUser, addUserToDB,loginUser } from '../controler/controler';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

mainRouter.get('/usuarios', getUser);
mainRouter.post('/registro', addUserToDB);
mainRouter.post('/login', loginUser)

export { mainRouter };  