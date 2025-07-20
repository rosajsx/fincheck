import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts-repository';
import { CategoriesRepository } from './repositories/categories.repository';
import { UserRepository } from './repositories/users.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoriesRepository,
    BankAccountsRepository,
  ],
  exports: [UserRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
