import { BaseService } from '../../config/base.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpException } from '../../exception/httpExceptions';
import { TestimonialEntity } from '../entities/testimonial.entity';
import { TestimonialDTO } from '../dto/testimonial.dto';
import { logger } from '../../utils/logger';

class TestimonialService extends BaseService<TestimonialEntity> {
  constructor() {
    super(TestimonialEntity);
  }

  public async getAllTestimonials(): Promise<TestimonialEntity[] | undefined> {
    try {
      logger.info(`${TestimonialService.name} - getAllTestimonials`);
      const data = await (await this.useRepository).find();
      return data;
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:19 ~ TestimonialService ~ getAllTestimonials ~ error:', error);
    }
  }

  public async findTestimonialById(tId: string): Promise<TestimonialEntity | null | undefined> {
    try {
      logger.info(`${TestimonialService.name} - findTestimonialById`);
      const data = (await this.useRepository).findOneBy({ id: tId });
      if (!data) throw new HttpException(409, "testimonial doesn't exist");

      return data;
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:31 ~ TestimonialService ~ findTestimonialById ~ error:', error);
    }
  }

  public async createTestimonial(testimonialData: TestimonialDTO): Promise<TestimonialEntity | null | undefined> {
    try {
      logger.info(`${TestimonialService.name} - createTestimonial`);
      const data = (await this.useRepository).create(testimonialData);
      return (await this.useRepository).save(data);
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:41 ~ TestimonialService ~ createTestimonial ~ error:', error);
    }
  }

  public async updateTestimonial(tId: string, testimonialData: TestimonialDTO): Promise<UpdateResult | undefined> {
    try {
      logger.info(`${TestimonialService.name} - updateTestimonial`);
      const data = (await this.useRepository).findOneBy({ id: tId });
      if (!data) throw new HttpException(409, "Testimonial doesn't exist");

      return (await this.useRepository).update(tId, { ...testimonialData });
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:53 ~ TestimonialService ~ updateTestimonial ~ error:', error);
    }
  }

  public async deleteTestimonial(tId: string): Promise<DeleteResult | undefined> {
    try {
      logger.info(`${TestimonialService.name} - deleteTestimonial`);
      const data = (await this.useRepository).findOne({ where: { id: tId } });
      if (!data) throw new HttpException(409, "Testimonial doesn't exist");

      return (await this.useRepository).delete({ id: tId });
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:65 ~ TestimonialService ~ deleteTestimonial ~ error:', error);
    }
  }
}

export default TestimonialService;
