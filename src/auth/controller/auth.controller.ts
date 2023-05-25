import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { UserEntity } from '../../user/entities/user.entity';
import { HttpResponse } from '../../shared/response/http.response';

export class AuthController extends AuthService {
  constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {
    super();
  }

  async login(req: Request, res: Response) {
    try {
      const userEncode = req.user as UserEntity;
      const encode = await this.generateJwt(userEncode);

      if (!encode) {
        return this.httpResponse.Unauthorized(res, `Invalid permission`);
      }

      res.header('Content-type', 'application/json');
      res.cookie('accessToken', encode.accessToken, { maxAge: 60000 * 60 });
      res.write(JSON.stringify(encode));
      res.end();
    } catch (error) {
      console.log('🚀 ~ file: auth.controller.ts:25 ~ AuthController ~ login ~ error:', error);
      return this.httpResponse.Error(res, error);
    }
  }
}
