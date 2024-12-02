import { Module } from '@nestjs/common';
import { UserGroupsService } from './user-groups.service';
import { UserGroupsDal } from './user-groups.dal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroup } from '../entities/user-group.entity';
import { UserGroupController } from './user-group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroup])],
  controllers: [UserGroupController],
  providers: [UserGroupsService, UserGroupsDal],
  exports: [UserGroupsService],
})
export class UserGroupsModule {}
