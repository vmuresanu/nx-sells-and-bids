import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '@nx-angular-nest/api/roles/data-access';

@Entity('permission')
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 18 })
  name: string;

  @ManyToMany(type => Role, role => role.permissions)
  roles: Role[];
}
