import { EntityRepository, Repository } from 'typeorm';
import { Permission } from './models/permission.entity';

@EntityRepository(Permission)
export class PermissionsRepository extends Repository<Permission> {
}
