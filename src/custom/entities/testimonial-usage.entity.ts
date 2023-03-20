import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TestimonialEntity } from '../../testimonial/entities/testimonial.entity';

@Entity({ name: 'testimonial_usage' })
export class TestimonialUsageEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  websiteUrl!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updateAt!: Date;

  @ManyToOne(() => TestimonialEntity, (testimonial) => testimonial.testimonialUsages)
  @JoinColumn({ name: 'testimonial_id' })
  testimonial!: TestimonialEntity;
}
