import { Response, Request } from 'express';
import { CustomerService } from './customer.service';
import { logger } from '../utils/logger';
import { HttpResponse } from '../shared/response/http.response';

class CustomerController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly customerService: CustomerService = new CustomerService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  async getAllCustomers(_req: Request, res: Response) {
    try {
      logger.info(`${CustomerController.name} - getAllCustomers`);
      const customers = await this.customerService.getAllCustomers();
      return this.httpResponse.OK(res, customers);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side in customerCtrl');
    }
  }

  async getCustomerById(req: Request, res: Response) {
    try {
      logger.info(`${CustomerController.name} - getCustomerById`);
      const { id } = req.params;
      const customer = await this.customerService.getCustomerById(id);
      return this.httpResponse.OK(res, customer);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side in customerCtrl');
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      logger.info(`${CustomerController.name} - createCustomer`);
      const { body } = req;
      const updCustomer = await this.customerService.createCustomer(body);
      return this.httpResponse.OK(res, updCustomer);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side in customerCtrl');
    }
  }

  async updateCustomer(req: Request, res: Response) {
    try {
      logger.info(`${CustomerController.name} - getAllCustomers`);
      const { id } = req.params;
      const { body } = req;
      const updCustomer = await this.customerService.updateCustomer(id, body);
      return this.httpResponse.OK(res, updCustomer);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side in customerCtrl');
    }
  }

  async deleteCustomerById(req: Request, res: Response) {
    try {
      logger.info(`${CustomerController.name} - getAllCustomers`);
      const { id } = req.params;
      const deletedCustomer = await this.customerService.deleteCustomerById(id);
      return this.httpResponse.OK(res, deletedCustomer);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side in customerCtrl');
    }
  }
}

export default CustomerController;
