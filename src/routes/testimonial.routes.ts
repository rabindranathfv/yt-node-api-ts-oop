import { Router } from 'express';
import TestimonialController from '../testimonial/controllers/testimonial.controller';
import { BaseRouter } from '../shared/router/base.router';
import { ValidateMiddlewareDTO } from '../shared/middleware/validate-dto.middleware';
import { TestimonialDTO } from '../testimonial/dto/testimonial.dto';

/**
 * @swagger
 * components:
 *  schemas:
 *    Testimonials:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: testimonial id
 *        content:
 *          type: string
 *          description: body of the content
 *        isNameUsageOnWebsiteGranted:
 *          type: number
 *          description: defines if we can use this testimonial or not
 *        createdAt:
 *          type: string
 *          format: date
 *          description: creation date of testimonial
 *        updatedAt:
 *          type: string
 *          format: date
 *          description: last update date of testimonial
 *      example:
 *        id: 1
 *        name: testimonial 1
 *        content: descripcion del testimonio numero 1
 *        isNameUsageOnWebsiteGranted: 0
 *        createAt: 2021-01-01
 *        updatedAt: 2022-01-01
 */

/**
 * @swagger
 *  tags:
 *    name: Testimonials
 *    description: Testimonials Endpoints
 */

class TestimonialRoute extends BaseRouter<TestimonialController, ValidateMiddlewareDTO> {
  public path = '/testimonials';
  public router = Router();
  public testimonialController = new TestimonialController();

  constructor() {
    super(TestimonialController, ValidateMiddlewareDTO);
    this.initTestimonialRoutes();
  }

  public initTestimonialRoutes() {
    /**
     * @swagger
     * /api/v1/testimonials:
     *  get:
     *    summary: get all testimonials from DB
     *    tags: [Testimonials]
     *    responses:
     *      200:
     *        descripcion: getAll testimonials
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#components/schemas/Testimonials'
     *              description: array of testimonials
     *      500:
     *        descripcion: server side Error
     */
    this.router.get(`${this.path}`, (req, res) => this.testimonialController.getAllTestimonials(req, res));

    /**
     * @swagger
     * /api/v1/testimonials/{id}:
     *  get:
     *    summary: get testimonial by id
     *    tags: [Testimonials]
     *    responses:
     *      200:
     *        description: get testimonial by id
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#components/schemas/Testimonials'
     *      404:
     *        description: testimonial does not exist
     *      500:
     *        description: server side Error
     */
    this.router.get(`${this.path}/:id`, (req, res) => this.testimonialController.findTestimonialById(req, res));

    /**
     * @swagger
     * /api/v1/testimonials:
     *  post:
     *    summary: returns all testimonials
     *    tags: [Testimonials]
     *    responses:
     *      200:
     *        description: returns all testimonials
     *      400:
     *        description: bad request because there is something wrong or missing in body
     *      500:
     *        description: server side error trying of create testimonial
     */
    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, TestimonialDTO)],
      (req, res) => this.testimonialController.createTestimonial(req, res),
    );

    /**
     * @swagger
     * /api/v1/testimonials/{id}:
     *  put:
     *    summary: returns all testimonials
     *    tags: [Testimonials]
     *    responses:
     *      200:
     *        description: returns all testimonials
     *      400:
     *        description: bad request based on errors in body
     *      404:
     *        description: testimonial id does could found
     *      500:
     *        description: error in server side
     */
    this.router.put(`${this.path}/:id`, (req, res) => this.testimonialController.updateTestimonial(req, res));

    /**
     * @swagger
     * /api/v1/testimonials/{id}:
     *  delete:
     *    summary: returns all testimonials
     *    tags: [Testimonials]
     *    responses:
     *      200:
     *        description: returns all testimonials
     *      404:
     *        description: user can not be deleted
     *      500:
     *        description: error in server side
     */
    this.router.delete(`${this.path}/:id`, (req, res) => this.testimonialController.deleteTestimonial(req, res));
  }
}

export default TestimonialRoute;
