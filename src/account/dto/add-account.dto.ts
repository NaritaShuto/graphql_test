import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AddAccount {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  age: number;
}
