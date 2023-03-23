import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import UserController from '../user/user.controller';

class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, (req, res) => this.userController.getAllUsers(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.userController.getUserById(req, res));

    this.router.post(`${this.path}`, (req, res) => this.userController.createUser(req, res));

    this.router.put(`${this.path}/:id`, (req, res) => this.userController.updateUserById(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.userController.deleteUserById(req, res));
  }
}

export default UserRoute;
