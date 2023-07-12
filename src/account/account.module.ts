import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { DatabaseModule, accountProviders } from 'lib/database';
import { AccountService } from './account.service';

@Module({
  imports: [DatabaseModule],
  providers: [...accountProviders, AccountResolver, AccountService],
})
export class AccountModule {}
