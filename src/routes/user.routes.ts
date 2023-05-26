import { Router } from 'express';
import UserController from '../user/controllers/user.controller';
import { BaseRouter } from '../shared/router/base.router';
import { ValidateMiddlewareDTO } from '../shared/middleware/validate-dto.middleware';
import { UserDTO } from '../user/dto/user.dto';

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: user Id
 *        name:
 *          type: string
 *          description: name of the user
 *        lastName:
 *          type: string
 *          description: lastname of the user
 *        email:
 *          type: string
 *          description: email of the user
 *        password:
 *          type: string
 *          description: password of the user
 *        gender:
 *          type: string
 *          description: gender of the user, can be F or M
 *        role:
 *          type: string
 *          enum: [USER, ADMIN]
 *          description: role of the user
 *        createdAt:
 *          type: string
 *          format: date
 *          description: creation date of user
 *        updatedAt:
 *          type: string
 *          format: date
 *          description: last update date of user
 *      example:
 *        id: 1
 *        name: rabin
 *        lastName: ferreira
 *        email: rferreira@gmail.com
 *        password: someEncryptedPasswd
 *        gender: M
 *        role: ADMIN
 *        createAt: 2021-01-01
 *        updatedAt: 2022-01-01
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 */

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: User Endpoints
 */

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
    /**
     * @swagger
     * /api/v1/users:
     *  get:
     *    summary: returns all users
     *    tags: [User]
     *    security:
     *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: returns all users
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#components/schemas/User'
     *              description: array of user
     *      400:
     *        description: bad request because is something wrong or missing in body
     *      500:
     *        description: server side error
     */
    this.router.get(`${this.path}`, this.middleware.passAuth('jwt'), (req, res) =>
      this.userController.getAllUsers(req, res),
    );

    this.router.get(`${this.path}/rel/:id`, this.middleware.passAuth('jwt'), (req, res) =>
      this.userController.getUserByIdWithRelation(req, res),
    );
    this.router.get(`${this.path}/:id`, this.middleware.passAuth('jwt'), (req, res) =>
      this.userController.getUserById(req, res),
    );

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, UserDTO)],
      (req, res) => this.userController.createUser(req, res),
    );

    this.router.put(
      `${this.path}/:id`,
      this.middleware.passAuth('jwt'),
      (req, res, next) => [this.middleware.checkAdminRole(req, res, next)],
      (req, res) => this.userController.updateUserById(req, res),
    );

    this.router.delete(
      `${this.path}/:id`,
      this.middleware.passAuth('jwt'),
      (req, res, next) => [this.middleware.checkAdminRole(req, res, next)],
      (req, res) => this.userController.deleteUserById(req, res),
    );
  }
}

export default UserRoute;
