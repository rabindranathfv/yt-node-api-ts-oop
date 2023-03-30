import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import TestimonialController from '../testimonial/testimonial.controller';

class TestimonialRoute implements Routes {
  public path = '/testimonials';
  public router = Router();
  public testimonialController = new TestimonialController();

  constructor() {
    this.initTestimonialRoutes();
  }

  public initTestimonialRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.testimonialController.getAllTestimonials(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.testimonialController.findTestimonialById(req, res));

    this.router.post(`${this.path}`, (req, res) => this.testimonialController.createTestimonial(req, res));

    this.router.put(`${this.path}/:id`, (req, res) => this.testimonialController.updateTestimonial(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.testimonialController.deleteTestimonial(req, res));
  }
}

export default TestimonialRoute;
