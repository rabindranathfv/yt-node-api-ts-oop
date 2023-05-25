import { UserEntity } from '../../user/entities/user.entity';
import { PassaportUse } from '../../utils/passaport.use';
import { AuthService } from '../services/auth.service';
import { VerifyFunction, Strategy as LocalStrategy } from 'passport-local';

const authService = new AuthService();

export class LoginStrategy {
  /**
   * validate
   */
  public async validate(email: string, password: string, done: any): Promise<UserEntity> {
    const user = await authService.validateUser(email, password);

    if (!user) {
      return done(null, false, { message: `invalid email or password` });
    }

    return done(null, user);
  }

  get use() {
    return PassaportUse<LocalStrategy, Object, VerifyFunction>(
      'login',
      LocalStrategy,
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      this.validate,
    );
  }
}
