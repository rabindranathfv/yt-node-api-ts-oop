import { BaseService } from '../../config/base.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpException } from '../../exception/httpExceptions';
import { TestimonialUsagelDTO } from '../dto/testimonial-usage.dto';
import { TestimonialUsageEntity } from '../entities/testimonial-usage.entity';
import { logger } from '../../utils/logger';

class TestimonialUsageService extends BaseService<TestimonialUsageEntity> {
  constructor() {
    super(TestimonialUsageEntity);
  }

  public async getAllUsageTestimonials(): Promise<TestimonialUsageEntity[] | undefined> {
    try {
      logger.info(`${TestimonialUsageService.name} - getAllUsageTestimonials`);
      const data = await (await this.useRepository).find();
      return data;
    } catch (error) {
      console.log(
        '🚀 ~ file: testimonial.service.ts:19 ~ TestimonialUsageService ~ getAllUsageTestimonials ~ error:',
        error,
      );
    }
  }

  public async findUsageTestimonialById(tId: string): Promise<TestimonialUsageEntity | null | undefined> {
    try {
      logger.info(`${TestimonialUsageService.name} - findUsageTestimonialById`);
      const data = (await this.useRepository).findOneBy({ id: tId });
      if (!data) throw new HttpException(409, "usageTestimonial doesn't exist");

      return data;
    } catch (error) {
      console.log(
        '🚀 ~ file: testimonial.service.ts:35 ~ TestimonialUsageService ~ findUsageTestimonialById ~ error:',
        error,
      );
    }
  }

  public async createUsageTestimonial(
    testimonialData: TestimonialUsagelDTO,
  ): Promise<TestimonialUsageEntity | null | undefined> {
    try {
      logger.info(`${TestimonialUsageService.name} - createUsageTestimonial`);
      const data = (await this.useRepository).create(testimonialData);
      return (await this.useRepository).save(data);
    } catch (error) {
      console.log(
        '🚀 ~ file: testimonial.service.ts:41 ~ TestimonialUsageService ~ createUsageTestimonial ~ error:',
        error,
      );
    }
  }

  public async updateUsageTestimonial(
    tId: string,
    testimonialData: TestimonialUsagelDTO,
  ): Promise<UpdateResult | undefined> {
    try {
      logger.info(`${TestimonialUsageService.name} - updateUsageTestimonial`);
      const data = (await this.useRepository).findOneBy({ id: tId });
      if (!data) throw new HttpException(409, "usageTestimonial doesn't exist");

      return (await this.useRepository).update(tId, { ...testimonialData });
    } catch (error) {
      console.log(
        '🚀 ~ file: testimonial.service.ts:68 ~ TestimonialUsageService ~ updateUsageTestimonial ~ error:',
        error,
      );
    }
  }

  public async deleteUsageTestimonial(tId: string): Promise<DeleteResult | undefined> {
    try {
      logger.info(`${TestimonialUsageService.name} - deleteUsageTestimonial`);
      const data = (await this.useRepository).findOne({ where: { id: tId } });
      if (!data) throw new HttpException(409, "usageTestimonial doesn't exist");

      return (await this.useRepository).delete({ id: tId });
    } catch (error) {
      console.log('🚀 ~ file: testimonial.service.ts:82 ~ deleteUsageTestimonial ~ deleteTestimonial ~ error:', error);
    }
  }
}

export default TestimonialUsageService;
