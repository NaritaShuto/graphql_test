import { ApiProperty } from '@nestjs/swagger';

export class UserIdForm {
  @ApiProperty({
    description: 'id',
    example: 1,
  })
  readonly id: number;
}

export class UserList {
  @ApiProperty({
    description: 'UserList',
    type: UserIdForm,
    isArray: true,
  })
  readonly list: UserIdForm[];
}
