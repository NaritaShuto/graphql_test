import { DataSource } from 'typeorm';
import { Account } from './entities/entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'test',
  entities: [Account],
  synchronize: true,
  logging: false,
});
