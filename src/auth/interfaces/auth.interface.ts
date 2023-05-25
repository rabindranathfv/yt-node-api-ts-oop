import { RoleType } from '../../user/type/user.type';

export interface PayloadToken {
  role: RoleType;
  sub: string;
}
