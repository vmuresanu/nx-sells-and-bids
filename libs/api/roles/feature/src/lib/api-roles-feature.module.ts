import { Module } from '@nestjs/common';
import { ApiRolesDataAccessModule } from '@nx-angular-nest/api/roles/data-access';
import { RolesController } from './roles.controller';

@Module({
  imports: [ApiRolesDataAccessModule],
  controllers: [RolesController],
  exports: [],
})
export class ApiRolesFeatureModule {}
