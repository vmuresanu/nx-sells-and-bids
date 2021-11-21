import { EntityRepository, Repository } from 'typeorm';
import { Role } from './models/role.entity';

@EntityRepository(Role)
export class RolesRepository extends Repository<Role> {

}
