import { Inject, Injectable } from '@nestjs/common';
import { Account } from './entities/account.entities';
import { Repository } from 'typeorm';
import { AccountId, AddAccount, UpdateAccount } from './dto';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  // ユーザ追加
  async addAccount(account: AddAccount): Promise<Account> {
    const addData = this.accountRepository.create(account);
    await this.accountRepository.save(addData);
    return addData;
  }

  // ユーザIDリスト取得
  async findAll(): Promise<AccountId[]> {
    const data = await this.accountRepository.find();
    const result = data.map((value) => {
      return { id: value.id };
    });
    console.log(result);
    return result;
  }

  // IDからユーザ情報取得
  async findOneById(id: number): Promise<Account> {
    const result = await this.accountRepository.findOne({
      where: [{ id: id }],
    });
    return result;
  }

  // アカウント情報更新
  async updateAccount(updateData: UpdateAccount): Promise<Account> {
    const accountData = await this.findOneById(updateData.id);
    const updateTime = new Date();
    Object.assign(accountData, updateData, { updateTime: updateTime });
    console.log(accountData);
    await this.accountRepository
      .createQueryBuilder()
      .update(Account)
      .set(accountData)
      .where('id = :id', { id: updateData.id })
      .execute();
    return accountData;
  }

  // アカウント削除
  async removeAccount(id: number) {
    console.log('call remove');
    await this.accountRepository.delete(id);
  }
}
