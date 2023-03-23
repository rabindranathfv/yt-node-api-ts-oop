import { Response, Request } from 'express';
import { CustomerService } from './customer.service';

class CustomerController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly customerService: CustomerService = new CustomerService()) {}

  async getAllCustomers(_req: Request, res: Response) {
    const customers = await this.customerService.getAllCustomers();
    return res.json({ customers });
  }

  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    const customer = await this.customerService.getCustomerById(id);
    return res.json({ customer });
  }

  async createCustomer(req: Request, res: Response) {
    const { body } = req;
    const updCustomer = await this.customerService.createCustomer(body);
    return res.json({ updCustomer });
  }

  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const updCustomer = await this.customerService.updateCustomer(id, body);
    return res.json({ updCustomer });
  }

  async deleteCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    const deletedCustomer = await this.customerService.deleteCustomerById(id);
    return res.json({ deletedCustomer });
  }
}

export default CustomerController;
