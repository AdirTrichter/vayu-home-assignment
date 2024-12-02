import { Injectable } from '@nestjs/common';
import { UsersDal } from './users.dal';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersService: UsersDal) {}

  findAll(page: number, pageSize: number): Promise<User[]> {
    return this.usersService.findAllPaginated(page, pageSize);
  }

  findOne(id: number) {
    return this.usersService.findOne(id);
  }
}
