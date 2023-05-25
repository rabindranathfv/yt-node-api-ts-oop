import { Router } from 'express';
import { AuthController } from '../auth/controller/auth.controller';
import { BaseRouter } from '../shared/router/base.router';
import { SharedMiddleware } from '../shared/middleware/share.middleware';

export class AuthRoutes extends BaseRouter<AuthController, SharedMiddleware> {
  public router = Router();
  public authController = new AuthController();
  constructor() {
    super(AuthController, SharedMiddleware);
    this.initAuthRoutes();
  }

  /**
   * initAuthRoutes
   */
  public initAuthRoutes() {
    this.router.post('/login', this.middleware.passAuth('login'), (req, res) => this.authController.login(req, res));
  }
}
