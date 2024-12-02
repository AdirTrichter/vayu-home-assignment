import { Injectable } from '@nestjs/common';
import { GroupsDal } from './groups.dal';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(private readonly groupsDal: GroupsDal) {}

  findAll(page: number, pageSize: number): Promise<Group[]> {
    return this.groupsDal.findAllPaginated(page, pageSize);
  }

  findOne(groupId): Promise<Group> {
    return this.groupsDal.findOne(groupId);
  }
}
