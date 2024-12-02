import { User } from '../entities/user.entity';
import { UsersDto } from './user.dto';

export const convertUserEntityToDTO = (user: User): UsersDto => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};
