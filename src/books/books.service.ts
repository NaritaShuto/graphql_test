import { Inject, Injectable } from '@nestjs/common';
import { Book } from './book/book';
import { NewBookInput } from './dto/newBook.input';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOneById(id: number): Promise<Book> {
    const allData = await this.bookRepository.find();
    const values = allData.find(() => {
      return (value: Book) => value.id === id;
    });

    return values;
  }

  async create(data: NewBookInput): Promise<Book> {
    const book = this.bookRepository.create(data);
    await this.bookRepository.save(book);
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.bookRepository.delete(id);
    return result.affected > 0;
  }
}
