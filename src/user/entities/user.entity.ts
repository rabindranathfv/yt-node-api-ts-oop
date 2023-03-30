import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { RoleType } from '../type/user.type';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  @Unique(['email'])
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  gender!: string;

  @Column({ type: 'enum', enum: RoleType, nullable: false })
  role!: RoleType;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
