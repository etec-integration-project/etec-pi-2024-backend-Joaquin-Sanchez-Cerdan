import express from 'express';
import { AppDataSource } from './persistance/db';
import { mainRouter } from './router/routes' ;
import { User } from './persistance/user';
import { Dogs } from './persistance/dogs';
import cors from 'cors';
import { config } from 'dotenv';

config();
const database = process.env.DATABASE_NAME
console.log(database)
const username = process.env.DATABASE_USERNAME
console.log(username)
const password = process.env.DATABASE_PASSWORD
console.log(password)
const host = process.env.DATABASE_HOST
console.log(host)

const app = express();
const port = 8080;

app.use(function(_, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origins, X-Requested-With, Content-Type, Accept");
    next();
})
    
app.use(express.json());
app.use ('/' , mainRouter);
app.use (cors());


AppDataSource.initialize()
    .then(async() => {
        console.log('Base de datos conectada');
//perros
        const validation_dogs = AppDataSource.manager.getRepository(Dogs)
        const dogs_exist = await validation_dogs.find()
        if (dogs_exist.length == 0){
            const dog1 = new Dogs('https://www.google.com/imgres?q=pastor%20aleman&imgurl=https%3A%2F%2Ft1.ea.ltmcdn.com%2Fes%2Fposts%2F7%2F0%2F0%2Falimentacion_de_un_pastor_aleman_cachorro_21007_orig.jpg&imgrefurl=https%3A%2F%2Fwww.expertoanimal.com%2Falimentacion-de-un-pastor-aleman-cachorro-21007.html&docid=Sfi6UXNZUDvRyM&tbnid=NuAeeJ3Oev_OqM&vet=12ahUKEwjz3fyT2KOGAxUBHrkGHSc_ALoQM3oECCgQAA..i&w=933&h=762&hcb=2&ved=2ahUKEwjz3fyT2KOGAxUBHrkGHSc_ALoQM3oECCgQAA', "Leyla", "German Shepherd", "Male", 1, 100)
            AppDataSource.manager.save([dog1])
            console.log(dogs_exist)
        }
//usuario
        const validation_user = AppDataSource.manager.getRepository(User)
        const user_exist = await validation_user.find()
        if (user_exist.length == 0){
            const user1 = new User("prueba123" , "prueba@gmail.com", "12345678", "12345678")
            AppDataSource.manager.save([user1])
            console.log(user_exist)
        }
        app.listen(port, () => {
            console.log(`Servidor: http://localhost:${port}`);
        });
    })
    .catch(err => {
        throw err
    });
