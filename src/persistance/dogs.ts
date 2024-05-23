import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dogs {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 200,
    })
    img!: string

    @Column({
        length: 200,
    })
    name!: string

    @Column({
        length: 200,
    })
    race!: string

    @Column({
        length: 200,
    })
    genre!: string

    @Column()
    age!: number

    @Column()
    price!: number

    constructor( img: string, name: string, race: string, genre: string, age: number, price: number) {
        this.img =img;
        this.name = name;
        this.race = race;
        this.genre = genre;
        this.age = age;
        this.price = price
    }

}