import { Router } from 'express';
import TestimonialController from '../testimonial/controllers/testimonial.controller';
import { BaseRouter } from '../shared/router/base.router';
import { ValidateMiddlewareDTO } from '../shared/middleware/validate-dto.middleware';
import { TestimonialDTO } from '../testimonial/dto/testimonial.dto';

class TestimonialRoute extends BaseRouter<TestimonialController, ValidateMiddlewareDTO> {
  public path = '/testimonials';
  public router = Router();
  public testimonialController = new TestimonialController();

  constructor() {
    super(TestimonialController, ValidateMiddlewareDTO);
    this.initTestimonialRoutes();
  }

  public initTestimonialRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.testimonialController.getAllTestimonials(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.testimonialController.findTestimonialById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, TestimonialDTO)],
      (req, res) => this.testimonialController.createTestimonial(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.testimonialController.updateTestimonial(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.testimonialController.deleteTestimonial(req, res));
  }
}

export default TestimonialRoute;
