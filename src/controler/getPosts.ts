import { Request, Response } from 'express';
import { AppDataSource } from '../persistance/db';
import { Dogs } from '../persistance/dogs';

export const getPosts = async (_:Request, res: Response) => {
    try {
        const perros = await AppDataSource.manager.find(Dogs);
        res.json(perros);
    } catch (error){
        console.log(error)
        res.json(500).send("Error del server")
    }
}