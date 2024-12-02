import { Injectable } from '@nestjs/common';
import { UserGroupsDal } from './user-groups.dal';

@Injectable()
export class UserGroupsService {
  constructor(private readonly userGroupsDal: UserGroupsDal) {}
  removeUserFromGroup(groupId: number, userId: number) {
    return this.userGroupsDal.removeUserFromGroup(groupId, userId);
  }

  findAll() {
    return this.userGroupsDal.findAll();
  }
}
