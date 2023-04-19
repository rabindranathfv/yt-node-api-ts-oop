import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpResponse } from '../../shared/response/http.response';
import { logger } from '../../utils/logger';
import TestimonialUsageService from '../services/testimonial-usage.service';

class TestimonialUsageController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly testimonialUsageService: TestimonialUsageService = new TestimonialUsageService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  public getAllUsageTestimonials = async (_req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialUsageController.name} - getAllUsageTestimonials`);
      const usersResp = await this.testimonialUsageService.getAllUsageTestimonials();
      return this.httpResponse.OK(res, usersResp);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, getAllUsageTestimonials');
    }
  };

  /**
   * findUsageTestimonialById
   */
  public findUsageTestimonialById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      logger.info(`${TestimonialUsageController.name} - findUsageTestimonialById with id ${id}`);
      const data = await this.testimonialUsageService.findUsageTestimonialById(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'usageTestimonial does not exist');
      }

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, findUsageTestimonialById');
    }
  };

  /**
   * createUsageTestimonial
   */
  public createUsageTestimonial = async (req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialUsageController.name} - createUsageTestimonial`);
      const data = await this.testimonialUsageService.createUsageTestimonial(req.body);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, createUsageTestimonial');
    }
  };

  /**
   * updateUsageTestimonial
   */
  public updateUsageTestimonial = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // extraer el id de la url
      logger.info(`${TestimonialUsageController.name} - updateUsageTestimonial with id ${id}`);

      const { body } = req;
      const data: UpdateResult | undefined = await this.testimonialUsageService.updateUsageTestimonial(id, body);
      if (!data?.affected) {
        return this.httpResponse.NotFound(res, 'usageTestimonial does not could updated');
      }
      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, updateUsageTestimonial');
    }
  };

  /**
   * deleteUsageTestimonialById
   */
  public deleteUsageTestimonialById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      logger.info(`${TestimonialUsageController.name} - deleteUsageTestimonialById with id ${id}`);
      const data: DeleteResult | undefined = await this.testimonialUsageService.deleteUsageTestimonial(id);

      if (!data?.affected) {
        return this.httpResponse.NotFound(res, 'usageTestimonial can not delete');
      }

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, deleteUsageTestimonialById');
    }
  };
}

export default TestimonialUsageController;
