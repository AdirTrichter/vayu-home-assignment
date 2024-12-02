import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDal {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllPaginated(page: number, limit: number): Promise<User[]> {
    const [data, _] = await this.userRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });

    return data;
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
