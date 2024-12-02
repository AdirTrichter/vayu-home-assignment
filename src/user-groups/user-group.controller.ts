import { Controller, Get } from '@nestjs/common';
import { UserGroupsService } from './user-groups.service';

@Controller('user-groups')
export class UserGroupController {
  constructor(private readonly userGroupService: UserGroupsService) {}

  @Get()
  findAll() {
    return this.userGroupService.findAll();
  }
}
