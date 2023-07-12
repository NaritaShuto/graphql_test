import { Args, Int, Query, Resolver, Mutation } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { AccountEntities } from './entities/account.entities';
import { AccountId, AddAccount, UpdateAccount } from './dto';

@Resolver(() => AccountEntities)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [AccountEntities])
  async getList(): Promise<AccountId[]> {
    return this.accountService.findAll();
  }

  // idからユーザ情報取得
  @Query(() => AccountEntities)
  async getAccount(@Args('id') id: number): Promise<AccountEntities> {
    return this.accountService.findOneById(id);
  }

  // アカウント追加
  @Mutation(() => AccountEntities)
  async addAccount(
    @Args('account') account: AddAccount,
  ): Promise<AccountEntities> {
    return this.accountService.addAccount(account);
  }

  // アカウント更新（id + 更新したい項目）
  @Mutation(() => AccountEntities)
  async updateAccount(
    @Args('updateData') updateData: UpdateAccount,
  ): Promise<AccountEntities> {
    return this.accountService.updateAccount(updateData);
  }

  // アカウント削除
  @Mutation(() => AccountEntities)
  async removeAccount(@Args('id') id: number) {
    await this.accountService.removeAccount(id);
  }
}
