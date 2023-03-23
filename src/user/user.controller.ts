import { Request, Response } from 'express';
import { HttpResponse } from '../shared/response/http.response';
import { logger } from '../utils/logger';
import UserService from './user.service';
import { UpdateResult, DeleteResult } from 'typeorm';

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    try {
      logger.info(`${UserController.name} - getAllUsers`);
      const usersResp = await this.userService.getAllUsers();
      return this.httpResponse.OK(res, usersResp);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      logger.info(`${UserController.name} - getUserById with id ${userId}`);
      const user = await this.userService.getUserById(userId);

      if (!user) {
        return this.httpResponse.NotFound(res, 'user does not exist');
      }

      return this.httpResponse.OK(res, user);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    try {
      logger.info(`${UserController.name} - createUser`);
      const newUser = await this.userService.createUser(req.body);

      return this.httpResponse.OK(res, newUser);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * updateUserById
   */
  public updateUserById = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params; // extraer el id de la url
      logger.info(`${UserController.name} - updateUserById with id ${userId}`);

      const { body: userBody } = req;
      const updatedUser: UpdateResult = await this.userService.updateUserById(userId, userBody);
      if (!updatedUser.affected) {
        return this.httpResponse.NotFound(res, 'user does not could updated');
      }
      return this.httpResponse.OK(res, updatedUser);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };

  /**
   * deleteUserById
   */
  public deleteUserById = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      logger.info(`${UserController.name} - deleteUserById with id ${userId}`);
      const userDeleted: DeleteResult = await this.userService.deleteUserById(userId);

      if (!userDeleted.affected) {
        return this.httpResponse.NotFound(res, 'user can not delete');
      }

      return this.httpResponse.OK(res, userDeleted);
    } catch (error) {
      return this.httpResponse.Error(res, 'error server side');
    }
  };
}

export default UserController;
