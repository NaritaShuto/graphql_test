import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { DatabaseModule, bookProviders } from 'lib/database';

@Module({
  imports: [DatabaseModule],
  providers: [...bookProviders, BooksResolver, BooksService],
})
export class BooksModule {}
