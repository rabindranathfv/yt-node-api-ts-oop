import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';

import { HttpResponse } from '../shared/response/http.response';
import { ValidationError, validate } from 'class-validator';
import { sanitize } from 'class-sanitizer';

export class ValidateMiddlewareDTO {
  constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {}

  validator(req: Request, res: Response, next: NextFunction, type: any) {
    const dtoObj = plainToClass(type, req.body);

    validate(dtoObj).then((err) => {
      if (err.length > 0) {
        const dtoErrors = err.map((error: ValidationError) => (Object as any).values(error.constraints)).join(', ');
        return this.httpResponse.BadRequest(res, dtoErrors);
      } else {
        sanitize(dtoObj);
        req.body = dtoObj;
        next();
      }
    });
  }
}
