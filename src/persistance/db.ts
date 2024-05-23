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
        img: "https://www.google.com/imgres?q=pastor%20aleman&imgurl=https%3A%2F%2Ft1.ea.ltmcdn.com%2Fes%2Fposts%2F7%2F0%2F0%2Falimentacion_de_un_pastor_aleman_cachorro_21007_orig.jpg&imgrefurl=https%3A%2F%2Fwww.expertoanimal.com%2Falimentacion-de-un-pastor-aleman-cachorro-21007.html&docid=Sfi6UXNZUDvRyM&tbnid=NuAeeJ3Oev_OqM&vet=12ahUKEwjz3fyT2KOGAxUBHrkGHSc_ALoQM3oECCgQAA..i&w=933&h=762&hcb=2&ved=2ahUKEwjz3fyT2KOGAxUBHrkGHSc_ALoQM3oECCgQAA",
        name: "Leyla",
        race: "German Shepherd",
        genre: "Male",
        age: 1,
        price: 100
    },
]