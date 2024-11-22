import { DataSource } from "typeorm"
import { User } from "./user"
import { Dogs } from "./dogs"
import "reflect-metadata"
import "dotenv/config"

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; MySQL Auth Failed Solution

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [Dogs, User],
    subscribers: [],
    migrations: []
})

export type Perros = {
    id: number
    nombre: string
    edad: number
    raza: string
    genero: string
    descripcion: string
    precio: number
}

export type Usuario = {
    id: number
    username: string
    email: string
    password: string
    password2: string
}

export const udb:Array <Usuario> = [
    {
        id: 1,
        username: "dulce",
        email: "dulce@gmail.com",
        password: "dulce123",
        password2: "dulce123"
    }
]

export const pdb:Array <Perros> = [
    {
        id: 1,
        nombre: "Maxi",
        edad: 5,
        raza: "Norwegian Forest Dog",
        genero: "Male",
        descripcion: "Family dog",
        precio: 400,
    },
]