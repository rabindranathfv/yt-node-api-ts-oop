import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

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

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updateAt!: Date;
}
