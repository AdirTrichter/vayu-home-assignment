import { GroupStatus } from '../common/enums/GroupStatus.enum';

export class GroupDto {
  id: number;
  name: string;
  status: GroupStatus;
  createdAt: Date;
}
