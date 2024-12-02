import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from '../entities/user-group.entity';
import { UserGroupNotFound } from './errors/UserGroupNotFound.error';

@Injectable()
export class UserGroupsDal {
  constructor(
    @InjectRepository(UserGroup)
    private readonly userGroupRepository: Repository<UserGroup>,
  ) {}

  private findUserGroup(groupId: number, userId: number) {
    return this.userGroupRepository.findOne({
      where: { user_id: userId, group_id: groupId },
    });
  }

  async removeUserFromGroup(groupId: number, userId: number) {
    const userGroup = await this.findUserGroup(groupId, userId);

    console.log('userGroup', userGroup);
    if (!userGroup) throw new UserGroupNotFound(groupId, userId);
    console.log('userGroup was found', userGroup);

    const queryRunner =
      this.userGroupRepository.manager.connection.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      // const remainingUsersInGroup = await queryRunner.manager.count(UserGroup, {
      //   where: { group_id: groupId },
      // });
      //
      // if (remainingUsersInGroup === 1) {
      //   const group = userGroup.group;
      //
      //   group.status = GroupStatus.EMPTY;
      //
      //   await queryRunner.manager.save(group);
      // }

      await queryRunner.manager.remove(userGroup);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.userGroupRepository.find();
  }
}
