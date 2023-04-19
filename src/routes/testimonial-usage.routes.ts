import { Router } from 'express';
import { BaseRouter } from '../shared/router/base.router';
import { ValidateMiddlewareDTO } from '../middleware/validate-dto.middleware';
import TestimonialUsageController from '../testimonial/controllers/testimonial-usage.controller';
import { TestimonialUsagelDTO } from '../testimonial/dto/testimonial-usage.dto';

class TestimonialUsageRoute extends BaseRouter<TestimonialUsageController, ValidateMiddlewareDTO> {
  public path = '/testimonials-usage';
  public router = Router();
  public testimonialUsageController = new TestimonialUsageController();

  constructor() {
    super(TestimonialUsageController, ValidateMiddlewareDTO);
    this.initTestimonialUsageRoutes();
  }

  public initTestimonialUsageRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.testimonialUsageController.getAllUsageTestimonials(req, res));

    this.router.get(`${this.path}/:id`, (req, res) =>
      this.testimonialUsageController.findUsageTestimonialById(req, res),
    );

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, TestimonialUsagelDTO)],
      (req, res) => this.testimonialUsageController.createUsageTestimonial(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.testimonialUsageController.updateUsageTestimonial(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) =>
      this.testimonialUsageController.deleteUsageTestimonialById(req, res),
    );
  }
}

export default TestimonialUsageRoute;
