import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TestimonialUsageEntity } from '../../custom/entities/testimonial-usage.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Entity({ name: 'testimonial' })
export class TestimonialEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  content!: string;

  @Column()
  isNameUsageOnWebsiteGranted!: number;

  @Column()
  isNameUsageOnSocialMediaGranted!: number;

  @Column()
  isContentUsageOnWebsiteGranted!: number;

  @Column()
  isContentUsageOnSocialMediaGranted!: number;

  @Column()
  isLogoUsageOnWebsiteGranted!: number;

  @Column()
  isLogoUsageOnSocialMediaGranted!: number;

  @Column()
  createdAt!: Date;

  @Column()
  updateAt!: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.testimonials)
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity;

  @OneToMany(() => TestimonialUsageEntity, (testiUsage) => testiUsage.testimonial)
  testimonialUsages!: TestimonialUsageEntity[];
}
