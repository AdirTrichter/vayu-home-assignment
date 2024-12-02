import { IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  pageSize: number = 10;
}
