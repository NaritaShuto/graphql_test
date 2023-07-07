import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ type: 'datetime' })
  updateTime: number;
}
