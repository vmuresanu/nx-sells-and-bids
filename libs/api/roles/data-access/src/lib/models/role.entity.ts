import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '@nx-angular-nest/api/user/data-access';
import { Permission } from '@nx-angular-nest/api/permissions/data-access';

@Entity('role')
@Unique(['name'])
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 18 })
  name: string;

  @ManyToMany(type => Permission, permission => permission.roles)
  @JoinTable({
    name: 'role_permission',
    joinColumns: [
      { name: 'role_id' }
    ],
    inverseJoinColumns: [
      { name: 'permission_id' }
    ]
  })
  permissions: Permission[];

  @ManyToMany(type => User, user => user.roles)
  users: User[];
}
