import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts-repository';
import { CategoriesRepository } from './repositories/categories.repository';
import { TransactionsRepository } from './repositories/transactions.repository';
import { UserRepository } from './repositories/users.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UserRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
