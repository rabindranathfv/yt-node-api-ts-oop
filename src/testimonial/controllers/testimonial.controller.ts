import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpResponse } from '../../shared/response/http.response';
import { logger } from '../../utils/logger';
import TestimonialService from '../services/testimonial.service';

class TestimonialController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly testimonialService: TestimonialService = new TestimonialService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  public getAllTestimonials = async (_req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialController.name} - getAllTestimonials`);
      const testimonialResp = await this.testimonialService.getAllTestimonials();
      return this.httpResponse.OK(res, testimonialResp);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, getAllTestimonials');
    }
  };

  /**
   * findTestimonialById
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
      return this.httpResponse.Error(res, 'error server side, findTestimonialById');
    }
  };

  /**
   * createTestimonial
   */
  public createTestimonial = async (req: Request, res: Response) => {
    try {
      logger.info(`${TestimonialController.name} - createTestimonial`);
      const data = await this.testimonialService.createTestimonial(req.body);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, createTestimonial');
    }
  };

  /**
   * updateTestimonial
   */
  public updateTestimonial = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // extraer el id de la url
      logger.info(`${TestimonialController.name} - updateTestimonial with id ${id}`);

      const { body } = req;
      const updatedTesti: UpdateResult | undefined = await this.testimonialService.updateTestimonial(id, body);
      if (!updatedTesti?.affected) {
        return this.httpResponse.NotFound(res, 'testimonial does not could updated');
      }
      return this.httpResponse.OK(res, updatedTesti);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, updateTestimonial');
    }
  };

  /**
   * deleteTestimonial
   */
  public deleteTestimonial = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      logger.info(`${TestimonialController.name} - deleteTestimonial with id ${id}`);
      const data: DeleteResult | undefined = await this.testimonialService.deleteTestimonial(id);

      if (!data?.affected) {
        return this.httpResponse.NotFound(res, 'user can not delete');
      }

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side, deleteTestimonial');
    }
  };
}

export default TestimonialController;
