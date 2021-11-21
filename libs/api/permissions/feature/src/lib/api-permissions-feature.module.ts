import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { ApiPermissionsDataAccessModule } from '@nx-angular-nest/api/permissions/data-access';

@Module({
  controllers: [PermissionsController],
  providers: [ApiPermissionsDataAccessModule],
})
export class ApiPermissionsFeatureModule {}
