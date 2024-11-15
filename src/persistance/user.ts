import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @Column({
        length: 100,
    })
    email!: string

    @Column ({
        length: 100,
    })
    password!: string

    @Column ({
        length: 100,
    })
    password2!: string

    constructor(name: string, email: string, password: string, password2: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.password2 = password2;
    }

}