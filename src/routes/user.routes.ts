import { Router } from 'express';
import UserController from '../user/controllers/user.controller';
import { BaseRouter } from '../shared/router/base.router';
import { ValidateMiddlewareDTO } from '../middleware/validate-dto.middleware';
import { UserDTO } from '../user/dto/user.dto';

class UserRoute extends BaseRouter<UserController, ValidateMiddlewareDTO> {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
    super(UserController, ValidateMiddlewareDTO);
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, (req, res) => this.userController.getAllUsers(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.userController.getUserById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, UserDTO)],
      (req, res) => this.userController.createUser(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.userController.updateUserById(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.userController.deleteUserById(req, res));
  }
}

export default UserRoute;
