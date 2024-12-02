import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupsDal {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    console.log('this.groupsRepository.find', this.groupsRepository.find());
    return this.groupsRepository.find();
  }

  async findAllPaginated(page: number, limit: number): Promise<Group[]> {
    const [data, _] = await this.groupsRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });

    return data;
  }

  findOne(id: number): Promise<Group> {
    return this.groupsRepository.findOne({ where: { id } });
  }
}
