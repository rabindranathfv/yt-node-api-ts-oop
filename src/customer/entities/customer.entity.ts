import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { TestimonialEntity } from '../../testimonial/entities/testimonial.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updateAt!: Date;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @OneToMany(() => TestimonialEntity, (testimonial) => testimonial.customer)
  testimonials!: TestimonialEntity[];
}
