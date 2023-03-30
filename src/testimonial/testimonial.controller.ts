import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpResponse } from '../shared/response/http.response';
import { logger } from '../utils/logger';
import TestimonialService from './testimonial.service';

class TestimonialController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly testimonialService: TestimonialService = new TestimonialService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  public getAllTestimonials = async (_req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialController.name} - getAllTestimonials`);
      const usersResp = await this.testimonialService.getAllTestimonials();
      return this.httpResponse.OK(res, usersResp);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * getUserById
   */
  public findTestimonialById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      logger.info(`${TestimonialController.name} - findTestimonialById with id ${id}`);
      const data = await this.testimonialService.findTestimonialById(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'testimonial does not exist');
      }

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * createUser
   */
  public createTestimonial = async (req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialController.name} - createTestimonial`);
      const data = await this.testimonialService.createTestimonial(req.body);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * updateUserById
   */
  public updateTestimonial = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // extraer el id de la url
      logger.info(`${TestimonialController.name} - updateTestimonial with id ${id}`);

      const { body } = req;
      const updatedUser: UpdateResult = await this.testimonialService.updateTestimonial(id, body);
      if (!updatedUser.affected) {
        return this.httpResponse.NotFound(res, 'user does not could updated');
      }
      return this.httpResponse.OK(res, updatedUser);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * deleteUserById
   */
  public deleteTestimonial = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      logger.info(`${TestimonialController.name} - deleteTestimonial with id ${id}`);
      const data: DeleteResult = await this.testimonialService.deleteTestimonial(id);

      if (!data.affected) {
        return this.httpResponse.NotFound(res, 'user can not delete');
      }

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };
}

export default TestimonialController;
