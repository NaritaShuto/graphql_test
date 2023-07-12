import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from 'lib/database/database.module';

const IMPORT_MODULES = [BooksModule, DatabaseModule, AccountModule];
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ...IMPORT_MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
