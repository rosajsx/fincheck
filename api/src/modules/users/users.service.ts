import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/database/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersReposity: UserRepository) {}

  getUserById(userId: string) {
    return this.usersReposity.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
      },
    });
  }
}
