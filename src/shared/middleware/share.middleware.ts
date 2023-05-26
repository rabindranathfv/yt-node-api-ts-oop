import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { UserEntity } from '../../user/entities/user.entity';
import { RoleType } from '../../user/type/user.type';
import { HttpResponse } from '../response/http.response';

export class SharedMiddleware {
  constructor(public httpResponse: HttpResponse = new HttpResponse()) {}

  passAuth(type: string) {
    return passport.authenticate(type, { session: false });
  }

  checkAdminRole(req: Request, res: Response, next: NextFunction) {
    const user = req.user as UserEntity;

    if (user.role !== RoleType.ADMIN) {
      return this.httpResponse.Forbbiden(res, `you do not have enought permission`);
    }

    next();
  }
}
