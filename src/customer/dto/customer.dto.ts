import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { UserEntity } from '../../user/entities/user.entity';

export class CustomerDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  user!: UserEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updateAt!: Date;
}
