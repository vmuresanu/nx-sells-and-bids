import { Exclude, Transform, Type } from 'class-transformer';
import { RoleResponse } from '@nx-angular-nest/api/roles/data-access';

export class UserResponse {
  @Exclude()
  id;

  username: string;

  @Exclude()
  password: string;

  @Type(() => RoleResponse)
  @Transform(({value}) => value.map(v => v.name))
  roles: RoleResponse[];

  createDate: Date;
}
