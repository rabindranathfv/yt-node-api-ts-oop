import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CustomerDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  name!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updateAt!: Date;
}
