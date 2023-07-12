import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { AddAccount } from './add-account.dto';

@InputType()
export class UpdateAccount extends PartialType(AddAccount) {
  @Field(() => Int)
  id: number;
}
