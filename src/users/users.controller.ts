import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UsersDto } from './user.dto';
import { convertUserEntityToDTO } from './converters';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UsePipes(ValidationPipe)
  async getAll(
    @Query() { page, pageSize }: PaginationDto,
  ): Promise<UsersDto[]> {
    const users = await this.usersService.findAll(page, pageSize);

    return users.map(convertUserEntityToDTO);
  }
}
