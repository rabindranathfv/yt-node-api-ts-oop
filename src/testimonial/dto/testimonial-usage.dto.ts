import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { TestimonialEntity } from '../entities/testimonial.entity';

export class TestimonialUsagelDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  websiteUrl!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updateAt!: Date;

  @IsOptional()
  testimonial!: TestimonialEntity;
}
