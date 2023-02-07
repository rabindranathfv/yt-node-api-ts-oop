import { Routes } from '../interfaces/route.interface';
import { Router, Request, Response } from 'express';

class BaseRoute implements Routes {
  public path = '/alive';
  public router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  /**
   * initBaseRoutes
   */
  public initBaseRoutes() {
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
    });
  }
}

export default BaseRoute;
