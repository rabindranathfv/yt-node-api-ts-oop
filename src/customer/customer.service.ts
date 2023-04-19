import { BaseService } from '../config/base.service';
import { CustomerEntity } from './entities/customer.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CustomerDTO } from './dto/customer.dto';
import { logger } from '../utils/logger';

export class CustomerService extends BaseService<CustomerEntity> {
  constructor() {
    super(CustomerEntity);
  }

  async getAllCustomers(): Promise<CustomerEntity[] | undefined> {
    try {
      logger.info(`${CustomerService.name} - getAllCustomers`);
      return (await this.useRepository).find();
    } catch (error) {
      console.log('🚀 ~ file: customer.service.ts:17 ~ CustomerService ~ getAllCustomers ~ error:', error);
    }
  }

  async getCustomerById(id: string): Promise<CustomerEntity | null | undefined> {
    try {
      logger.info(`${CustomerService.name} - getCustomerById`);
      return (await this.useRepository).findOneBy({ id });
    } catch (error) {
      console.log('🚀 ~ file: customer.service.ts:26 ~ CustomerService ~ getCustomerById ~ error:', error);
    }
  }

  async createCustomer(customer: CustomerDTO): Promise<CustomerEntity | null | undefined> {
    try {
      logger.info(`${CustomerService.name} - createCustomer`);
      return (await this.useRepository).save(customer);
    } catch (error) {
      console.log('🚀 ~ file: customer.service.ts:35 ~ CustomerService ~ createCustomer ~ error:', error);
    }
  }

  async updateCustomer(id: string, customerBody: CustomerDTO): Promise<UpdateResult | null | undefined> {
    try {
      logger.info(`${CustomerService.name} - updateCustomer`);
      return (await this.useRepository).update(id, customerBody);
    } catch (error) {
      console.log('🚀 ~ file: customer.service.ts:44 ~ CustomerService ~ updateCustomer ~ error:', error);
    }
  }

  async deleteCustomerById(id: string): Promise<DeleteResult | null | undefined> {
    try {
      logger.info(`${CustomerService.name} - deleteCustomerById`);
      return (await this.useRepository).delete({ id });
    } catch (error) {
      console.log('🚀 ~ file: customer.service.ts:53 ~ CustomerService ~ deleteCustomerById ~ error:', error);
    }
  }
}
