import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { GroupsDal } from './groups.dal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../entities/group.entity';
import { UserGroupsModule } from '../user-groups/user-groups.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), UserGroupsModule],
  controllers: [GroupsController],
  providers: [GroupsService, GroupsDal],
  exports: [GroupsService],
})
export class GroupsModule {}
