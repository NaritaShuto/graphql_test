import { ApiProperty } from '@nestjs/swagger';

export class AccountFrom {
  @ApiProperty({
    description: 'id',
    example: 1,
  })
  readonly id: number;

  @ApiProperty({
    description: 'firstName',
    example: 'taro',
  })
  readonly firstName: string;

  @ApiProperty({
    description: 'lastName',
    example: 'yamada',
  })
  readonly lastName: string;

  @ApiProperty({
    description: 'age',
    example: 100,
  })
  readonly age: number;

  @ApiProperty({
    description: 'updateTime',
    example: 19991231,
  })
  readonly updateTime: Date;
}
