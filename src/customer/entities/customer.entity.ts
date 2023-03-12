import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updateAt!: Date;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
}
