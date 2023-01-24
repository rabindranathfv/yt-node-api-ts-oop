import { Request, Response } from "express";
import { logger } from "../utils/logger";

class UserController {
  constructor() {}

  /**
   * getAllUsers
   */
  public getAllUsers = async (_req: Request, res: Response) => {
    logger.info(`${UserController.name} - getAllUsers`);
    return res.status(200).json({ ok: true, message: `list of Users` });
  };

  /**
   * getUserById
   */
  public getUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`${UserController.name} - getUserById with id ${userId}`);
    return res.status(200).json({ ok: true, message: `user's detail` });
  };

  /**
   * createUser
   */
  public createUser = async (req: Request, res: Response) => {
    logger.info(`${UserController.name} - createUser`);
    const { body: userBody } = req;
    console.log(
      "🚀 ~ file: user.controller.ts:31 ~ UserController ~ createUser= ~ userBody",
      userBody
    );
    const { email } = userBody;
    return res
      .status(200)
      .json({
        ok: true,
        message: `users with email ${email} was create succesfully`,
      });
  };

  /**
   * updateUserById
   */
  public updateUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params; // extraer el id de la url
    logger.info(`${UserController.name} - updateUserById with id ${userId}`);

    const { body: userBody } = req;
    console.log(
      "🚀 ~ file: user.controller.ts:48 ~ UserController ~ updateUserById= ~ userBody",
      userBody
    );
    return res
      .status(200)
      .json({ ok: true, message: `user's update successfully` });
  };

  /**
   * deleteUserById
   */
  public deleteUserById = async (req: Request, res: Response) => {
    const { id: userId } = req.params;
    logger.info(`${UserController.name} - deleteUserById with id ${userId}`);

    return res
      .status(200)
      .json({ ok: true, message: `user's deleted successfully` });
  };
}

export default UserController;
