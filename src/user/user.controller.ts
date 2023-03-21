import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import UserService from './user.service';

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly userService: UserService = new UserService()) {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`${UserController.name} - getAllUsers`);
    const usersResp = await this.userService.getAllUsers();
    return res.json({ ok: true, users: usersResp, message: `list of Users` });
  };

  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`${UserController.name} - getUserById with id ${userId}`);
    const user = await this.userService.getUserById(userId);
    return res.status(200).json({ ok: true, user, message: `user's detail` });
  };

  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    logger.info(`${UserController.name} - createUser`);
    const newUser = await this.userService.createUser(req.body);
    return res.status(200).json({
      ok: true,
      user: newUser,
      message: `users was create succesfully`,
    });
  };

  /**
   * updateUserById
   */
  public updateUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params; // extraer el id de la url
    logger.info(`${UserController.name} - updateUserById with id ${userId}`);

    const { body: userBody } = req;
    console.log('🚀 ~ file: user.controller.ts:48 ~ UserController ~ updateUserById= ~ userBody', userBody);
    const updatedUser = await this.userService.updateUserById(userId, userBody);
    return res.status(200).json({
      ok: true,
      user: updatedUser,
      message: `user's update successfully`,
    });
  };

  /**
   * deleteUserById
   */
  public deleteUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`${UserController.name} - deleteUserById with id ${userId}`);
    const userDeleted = await this.userService.deleteUserById(userId);
    return res.status(200).json({
      ok: true,
      user: userDeleted,
      message: `user's deleted successfully`,
    });
  };
}

export default UserController;
