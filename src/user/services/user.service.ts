import { logger } from '../../utils/logger';
import { BaseService } from '../../config/base.service';
import { UserEntity } from '../entities/user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDTO } from '../dto/user.dto';
import { createHashValue } from '../../utils/hash';

class UserService extends BaseService<UserEntity> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    super(UserEntity);
  }

  /**
   * getAllUsers
   */
  public async getAllUsers(): Promise<UserEntity[] | undefined> {
    try {
      logger.info(`${UserService.name} - getAllUsers`);
      const users = await (await this.useRepository).find();
      return users;
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts:24 ~ UserService ~ getAllUsers ~ error:', error);
    }
  }

  /**
   * getUserById
   */
  public async getUserById(uId: string): Promise<UserEntity | null | undefined> {
    try {
      logger.info(`${UserService.name} - getUserById with id ${uId}`);
      const user = await (await this.useRepository).findOneBy({ id: uId });
      return user;
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts:36 ~ UserService ~ getUserById ~ error:', error);
    }
  }

  /**
   * createUser
   */
  public async createUser(userBody: UserDTO): Promise<UserEntity | null | undefined> {
    try {
      logger.info(`${UserService.name} - createUser`);
      const { password } = userBody;
      const hashedPsw = await createHashValue(password);
      const newUser = await (await this.useRepository).create({ ...userBody, password: hashedPsw });
      return (await this.useRepository).save(newUser);
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts:52 ~ UserService ~ createUser ~ error:', error);
    }
  }

  /**
   * updateUserById
   */
  public async updateUserById(id: string, updateUserBody: UserDTO): Promise<UpdateResult | undefined> {
    try {
      logger.info(`${UserService.name} - updateUserById with id ${id}`);
      const findUser = await (await this.useRepository).findOneBy({ id });
      if (!findUser) {
        // TODO agregar o retonar error
        console.log('el usuario no EXISTE!!!');
      }
      return await (await this.useRepository).update(id, { ...updateUserBody });
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts:70 ~ UserService ~ updateUserById ~ error:', error);
    }
  }

  /**
   * deleteUserById
   */
  public async deleteUserById(id: string): Promise<DeleteResult | undefined> {
    try {
      logger.info(`${UserService.name} - deleteUserById with id ${id}`);
      const findUser = await (await this.useRepository).findOneBy({ id });
      if (!findUser) {
        // TODO agregar o retonar error
        console.log('el usuario no EXISTE!!!');
      }

      return await (await this.useRepository).delete({ id });
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts:89 ~ UserService ~ deleteUserById ~ error:', error);
    }
  }
}

export default UserService;
