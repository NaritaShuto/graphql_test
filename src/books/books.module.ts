import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { DatabaseModule } from 'lib/database/database.module';
import { bookProviders } from 'lib/database/database.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...bookProviders, BooksResolver, BooksService],
})
export class BooksModule {}
