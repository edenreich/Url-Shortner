import { Entity, PrimaryGeneratedColumn, Column, 
    BaseEntity, UpdateDateColumn, CreateDateColumn } from "typeorm";


@Entity({"name": "urls"})
export class Url extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "original_url", type: "varchar", length: 50})
    originalUrl: string;

    @Column({name: "short_url", type: "varchar", length: 10})
    shortUrl: string;

    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;

    @CreateDateColumn({type: "timestamp"})
    created_at: Date;
}
