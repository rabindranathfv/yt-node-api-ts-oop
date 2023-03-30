import { BaseService } from '../config/base.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpException } from '../exception/httpExceptions';
import { TestimonialEntity } from './entities/testimonial.entity';
import { TestimonialDTO } from './dto/testimonial.dto';

class TestimonialService extends BaseService<TestimonialEntity> {
  constructor() {
    super(TestimonialEntity);
  }

  public async getAllTestimonials(): Promise<TestimonialEntity[]> {
    const data = await (await this.useRepository).find();
    return data;
  }

  public async findTestimonialById(tId: string): Promise<TestimonialEntity | null> {
    const data = (await this.useRepository).findOneBy({ id: tId });
    if (!data) throw new HttpException(409, "testimonial doesn't exist");

    return data;
  }

  public async createTestimonial(testimonialData: TestimonialDTO): Promise<TestimonialEntity | null> {
    const data = (await this.useRepository).create(testimonialData);
    return (await this.useRepository).save(data);
  }

  public async updateTestimonial(tId: string, testimonialData: TestimonialDTO): Promise<UpdateResult> {
    const data = (await this.useRepository).findOneBy({ id: tId });
    if (!data) throw new HttpException(409, "Testimonial doesn't exist");

    return (await this.useRepository).update(tId, { ...testimonialData });
  }

  public async deleteTestimonial(tId: string): Promise<DeleteResult> {
    const data = (await this.useRepository).findOne({ where: { id: tId } });
    if (!data) throw new HttpException(409, "Testimonial doesn't exist");

    return (await this.useRepository).delete({ id: tId });
  }
}

export default TestimonialService;
