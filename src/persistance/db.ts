import { DataSource } from "typeorm"
import { User } from "./user"
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '192.168.42.81',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'dogsdb',
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