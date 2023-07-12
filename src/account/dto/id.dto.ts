import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AccountId {
  @Field()
  id: number;
}
