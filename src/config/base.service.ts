import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { ConfigServer } from './config';

export class BaseService<T extends ObjectLiteral> extends ConfigServer {
  public useRepository: Promise<Repository<T>>;
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.useRepository = this.initRepository(getEntity);
  }

  async initRepository<T extends ObjectLiteral>(entity: EntityTarget<T>) {
    const connection = await this.initConnect;
    return connection.getRepository(entity);
  }
}
