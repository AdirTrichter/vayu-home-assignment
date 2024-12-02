import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupDto } from './group.dto';
import { convertGroupEntityToDTO } from './converters';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UserGroupsService } from '../user-groups/user-groups.service';
import { UserGroupNotFound } from '../user-groups/errors/UserGroupNotFound.error';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly userGroupsService: UserGroupsService,
  ) {}

  @Get()
  @UsePipes(ValidationPipe)
  async getAll(
    @Query() { page, pageSize }: PaginationDto,
  ): Promise<GroupDto[]> {
    console.log('{ page, pageSize }', page, pageSize);
    const groups = await this.groupsService.findAll(page, pageSize);

    return groups.map(convertGroupEntityToDTO);
  }

  @Delete(':groupId/user/:userId')
  async removeUserFromGroup(
    @Param('groupId') groupId: string,
    @Param('userId') userId: string,
  ) {
    if (isNaN(+userId) || isNaN(+userId)) {
      throw new BadRequestException();
    }

    try {
      this.userGroupsService.removeUserFromGroup(+groupId, +userId);
    } catch (error: unknown) {
      if (error instanceof UserGroupNotFound) {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }
}
