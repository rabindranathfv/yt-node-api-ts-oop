import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TestimonialEntity } from './testimonial.entity';

@Entity({ name: 'testimonial_usage' })
export class TestimonialUsageEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  websiteUrl!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;

  @ManyToOne(() => TestimonialEntity, (testimonial) => testimonial.testimonialUsages)
  @JoinColumn({ name: 'testimonial_id' })
  testimonial!: TestimonialEntity;
}
