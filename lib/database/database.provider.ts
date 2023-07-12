import { Book } from 'src/books/book/book';
import { dataSource } from '../../typeorm/data-source';
import { DataSource } from 'typeorm';
import { AccountEntities } from 'src/account/entities/account.entities';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Book),
    inject: ['DATA_SOURCE'],
  },
];

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AccountEntities),
    inject: ['DATA_SOURCE'],
  }
]