import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dogs {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 200,
    })
    nombre!: string

    @Column()
    edad!: number

    @Column({
        length: 200,
    })
    raza!: string

    @Column()
    genero!: string

    @Column({
        length: 200,
    })
    descripcion!: string

    @Column()
    precio!: number

    constructor( nombre: string, edad: number, raza: string, genero: string, descripcion: string, precio: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.genero = this.genero;
        this.descripcion = this.descripcion
        this.precio = precio
    }

}