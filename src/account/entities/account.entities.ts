import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Account {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: '255' })
  @Field()
  firstName: string;

  @Column({ length: '255' })
  @Field()
  lastName: string;

  @Column({ type: 'int', unsigned: true })
  @Field((type) => Int)
  age: number;

  @CreateDateColumn()
  @Field()
  updateTime: Date;
}
