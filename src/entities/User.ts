import { IsEmail, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  @IsString({ message: 'O nome deve estar preenchido' })
  name!: string;

  @Column({ type: 'varchar', unique: true })
  @IsEmail()
  email!: string;
}
