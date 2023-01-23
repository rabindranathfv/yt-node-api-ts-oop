import { Router, Response, Request } from "express";
import { Routes } from "../interfaces/route.interface";

class UserRoute implements Routes {
  public path = "/user";
  public router = Router();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    // TODO: getAllUser
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      return res.status(200).json({ ok: true, message: `list of Users` });
    });

    // TODO: getUserById
    this.router.get(`${this.path}/:id`, (req: Request, res: Response) => {
      console.log("Parametros del request ", req.params);
      const { id: userId } = req.params;
      console.log(
        "🚀 ~ file: user.routes.ts:24 ~ UserRoute ~ this.router.get ~ userId",
        userId
      );
      return res.status(200).json({ ok: true, message: `user's detail` });
    });

    // TODO: createUser
    this.router.post(`${this.path}`, (req: Request, res: Response) => {
      const { body: userBody } = req;
      console.log(
        "🚀 ~ file: user.routes.ts:35 ~ UserRoute ~ this.router.post ~ userBody",
        userBody
      );
      return res
        .status(200)
        .json({ ok: true, message: `users with email was create succesfully` });
    });

    // TODO: updateUserById
    this.router.put(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;
      console.log(
        "🚀 ~ file: user.routes.ts:47 ~ UserRoute ~ this.router.put ~ userId",
        userId
      );
      const { body: userBody } = req;
      console.log(
        "🚀 ~ file: user.routes.ts:50 ~ UserRoute ~ this.router.put ~ userBody",
        userBody
      );
      return res
        .status(200)
        .json({ ok: true, message: `user's update successfully` });
    });

    // TODO: deleteUserById
    this.router.delete(`${this.path}/:id`, (req: Request, res: Response) => {
      console.log("Parametros del request ", req.params);
      const { id: userId } = req.params;
      console.log(
        "🚀 ~ file: user.routes.ts:54 ~ UserRoute ~ this.router.get ~ userId",
        userId
      );
      return res
        .status(200)
        .json({ ok: true, message: `user's deleted successfully` });
    });
  }
}

export default UserRoute;
