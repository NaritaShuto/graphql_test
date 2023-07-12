import { Account } from 'src/account/entities/account.entities';
import { Book } from 'src/books/book/book';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'graphql_test',
  entities: [Book, Account],
  synchronize: true,
});
