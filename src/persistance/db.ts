import { DataSource } from "typeorm"
import { User } from "./user"
import { Dogs } from "./dogs"
import "reflect-metadata"
import "dotenv/config"

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; MySQL Auth Failed Solution

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
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
    img: string
    name: string
    race: string
    genre: string
    age: number
    price: number
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
        img: "https://www.thesprucepets.com/thmb/t2a_ZIsGy6QxYgy1AX14S0sPx6k=/3135x0/filters:no_upscale():strip_icc()/0.slyncher00NorwegianElkhound-f489583c55cd4aadbdeafdecf5605b87.jpg",
        name: "Maxi",
        race: "Norwegian Forest Dog",
        genre: "Male",
        age: 5,
        price: 400
    },
]