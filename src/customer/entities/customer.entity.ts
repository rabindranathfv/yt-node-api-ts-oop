import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TestimonialEntity } from '../../testimonial/entities/testimonial.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @OneToMany(() => TestimonialEntity, (testimonial) => testimonial.customer)
  testimonials!: TestimonialEntity[];
}
