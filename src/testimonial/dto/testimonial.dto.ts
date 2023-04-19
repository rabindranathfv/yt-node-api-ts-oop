import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { TestimonialUsageEntity } from '../entities/testimonial-usage.entity';

export class TestimonialDTO {
  @IsOptional()
  id!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  content!: string;

  @IsNotEmpty()
  isNameUsageOnWebsiteGranted!: number;

  @IsNotEmpty()
  isNameUsageOnSocialMediaGranted!: number;

  @IsNotEmpty()
  isContentUsageOnWebsiteGranted!: number;

  @IsNotEmpty()
  isContentUsageOnSocialMediaGranted!: number;

  @IsNotEmpty()
  isLogoUsageOnWebsiteGranted!: number;

  @IsNotEmpty()
  isLogoUsageOnSocialMediaGranted!: number;

  @IsNotEmpty()
  customer!: CustomerEntity;

  @IsOptional()
  testimonialUsages?: TestimonialUsageEntity;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updateAt!: Date;
}
