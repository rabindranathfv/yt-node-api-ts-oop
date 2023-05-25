import { JWT_SECRET } from '../../config/config';
import { UserEntity } from '../../user/entities/user.entity';
import UserService from '../../user/services/user.service';
import { isValidPassword } from '../../utils/hash';
import { PayloadToken } from '../interfaces/auth.interface';

import * as jwt from 'jsonwebtoken';

export class AuthService {
  constructor(private readonly userService: UserService = new UserService(), private readonly jwtInstance = jwt) {}

  /**
   * validateUser
   */
  public async validateUser(email: string, password: string): Promise<UserEntity | null> {
    const userByEmail = await this.userService.findUserByEmail(email);

    if (userByEmail && (await isValidPassword(password, userByEmail.password))) {
      return userByEmail;
    }

    return null;
  }

  /**
   * signature
   */
  public signature(payload: PayloadToken, secret: any) {
    return this.jwtInstance.sign(payload, secret);
  }

  /**
   * generateJwt
   */
  public async generateJwt(user: UserEntity): Promise<{ accessToken: string; user: UserEntity | null | undefined }> {
    const userCheck = await this.userService.findUserWithRol(user.id, user.role);

    const payload: PayloadToken = {
      role: userCheck!.role,
      sub: userCheck!.id,
    };

    if (userCheck) {
      user.password = 'Not permission';
    }

    return {
      accessToken: this.signature(payload, JWT_SECRET),
      user: userCheck,
    };
  }
}
