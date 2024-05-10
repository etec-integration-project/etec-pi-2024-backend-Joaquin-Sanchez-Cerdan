import { DataSource } from "typeorm"
import { User } from "./user"
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
    entities: [User],
    subscribers: [],
    migrations: []
})

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