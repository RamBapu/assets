import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

const userRepository = AppDataSource.getRepository(User);

const user = new User();
user.firstName = "Timber";
user.lastName = "Saw";
user.age = 25;
await userRepository.save(user);

const allUsers = await userRepository.find();
const firstUser = await userRepository.findOneBy({
  id: 1,
}); // find by id
const timber = await userRepository.findOneBy({
  firstName: "Timber",
  lastName: "Saw",
}); // find by firstName and lastName

await userRepository.remove(timber);

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(() => Photo)
  @JoinColumn()
  photo: Photo;
}
