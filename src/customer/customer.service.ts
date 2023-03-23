import { BaseService } from '../config/base.service';
import { CustomerEntity } from './entities/customer.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CustomerDTO } from './dto/customer.dto';

export class CustomerService extends BaseService<CustomerEntity> {
  constructor() {
    console.log('AQUI');
    super(CustomerEntity);
  }

  async getAllCustomers(): Promise<CustomerEntity[]> {
    return (await this.useRepository).find();
  }

  async getCustomerById(id: string): Promise<CustomerEntity | null> {
    return (await this.useRepository).findOneBy({ id });
  }

  async createCustomer(customer: CustomerDTO): Promise<CustomerEntity | null> {
    return (await this.useRepository).save(customer);
  }

  async updateCustomer(id: string, customerBody: CustomerDTO): Promise<UpdateResult | null> {
    return (await this.useRepository).update(id, customerBody);
  }

  async deleteCustomerById(id: string): Promise<DeleteResult | null> {
    return (await this.useRepository).delete({ id });
  }
}
