import { Args, Int, Query, Resolver, Mutation } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Account } from './entities/account.entities';
import { AccountId, AddAccount, UpdateAccount } from './dto';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [Account], { name: 'getId' })
  async getList(): Promise<AccountId[]> {
    return this.accountService.findAll();
  }

  // idからユーザ情報取得
  @Query(() => Account, { name: 'getAccount' })
  async getAccount(@Args('id') id: number): Promise<Account> {
    return this.accountService.findOneById(id);
  }

  // アカウント追加
  @Mutation(() => Account, { name: 'add' })
  async addAccount(@Args('account') account: AddAccount): Promise<Account> {
    return this.accountService.addAccount(account);
  }

  // アカウント更新（id + 更新したい項目）
  @Mutation(() => Account, { name: 'update', nullable: true })
  async updateAccount(
    @Args('updateData') updateData: UpdateAccount,
  ): Promise<Account> {
    return this.accountService.updateAccount(updateData);
  }

  // アカウント削除
  @Mutation(() => Account, { name: 'remove' })
  async removeAccount(@Args('id') id: number): Promise<AccountId> {
    await this.accountService.removeAccount(id);
    return { id: id };
  }
}
