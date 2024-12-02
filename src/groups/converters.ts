import { Group } from '../entities/group.entity';
import { GroupDto } from './group.dto';

export const convertGroupEntityToDTO = (group: Group): GroupDto => {
  return {
    id: group.id,
    name: group.name,
    createdAt: group.createdAt,
    status: group.status,
  };
};
