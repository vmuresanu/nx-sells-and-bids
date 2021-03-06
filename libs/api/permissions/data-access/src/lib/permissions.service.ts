import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionsRepository } from './permissions.repository';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(PermissionsRepository)
    private permissionsRepository: PermissionsRepository) {
  }

  async getPermissionsByUsername(username: string): Promise<any> {
    /*return this.permissionRepository.createQueryBuilder()
      .select('permission.name')
      .innerJoin('role_permission', 'rp', 'permission.id = rp.permission_id')
      .innerJoin('role', 'r', 'rp.role_id = r.id')
      .innerJoin('user_role', 'ur', 'r.id = ur.role_id')
      .innerJoin('user', 'u', 'u.id = ur.user_id')
      .where('u.username = :username', {username})
      .getRawMany()
      .then((permissions: Permission[]) => permissions.map(p => p.name));*/
  }
}
