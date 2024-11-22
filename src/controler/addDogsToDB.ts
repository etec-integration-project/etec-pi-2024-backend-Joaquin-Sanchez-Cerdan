import { Request, Response } from 'express';
import { AppDataSource } from '../persistance/db';
import { Dogs } from '../persistance/dogs';

export const addDogsToDB = async (req: Request, res: Response) => {
    console.log("Datos: ", req.body);
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const raza = req.body.raza;
    const genero = req.body.genero;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;

    try {
            const perroNew = new Dogs(nombre, edad, raza, genero, descripcion, precio);

            try {
                await AppDataSource.manager.save(perroNew);

                return res.status(201).json({ message: "Perro añadido"});
            } catch (error) {
                console.error('Error:', error);
                return res.status(401).json({ error: 'Error' });
            }
        } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }  
};