import { logger } from "../utils/logger";

class UserService {
  constructor() {}

  /**
   * getAllUsers
   */
  public async getAllUsers() {
    logger.info(`${UserService.name} - getAllUsers`);
    const users = [
      { id: 1, fullname: "rabindranath ferreira", email: "rfv@correo.com" },
    ];
    return users;
  }

  /**
   * getUserById
   */
  public async getUserById(id: string) {
    logger.info(`${UserService.name} - getUserById with id ${id}`);
    const user = {
      id,
      fullname: "pedro lopez",
      email: "plopez@correo.com",
    };

    return user;
  }

  /**
   * createUser
   */
  public async createUser(userBody: any) {
    console.log(
      "🚀 ~ file: user.service.ts:35 ~ UserService ~ createUser ~ userBody",
      userBody
    );
    logger.info(`${UserService.name} - createUser`);
    const newUser = { ...userBody, id: 1000 };
    return newUser;
  }

  /**
   * updateUserById
   */
  public async updateUserById(id: string, updateUserBody: any) {
    console.log(
      "🚀 ~ file: user.service.ts:48 ~ UserService ~ updateUserById ~ updateUserBody",
      updateUserBody
    );
    logger.info(`${UserService.name} - updateUserById with id ${id}`);
    const updatedUser = { ...updateUserBody, id: 1000 };
    return updatedUser;
  }

  /**
   * deleteUserById
   */
  public async deleteUserById(id: string) {
    logger.info(`${UserService.name} - deleteUserById with id ${id}`);
    const userDeleted = {
      id,
      fullname: "carlos diaz",
      email: "cdiaz@correo.com",
    };

    return userDeleted;
  }
}

export default UserService;
