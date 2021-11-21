import { Module } from '@nestjs/common';
import { ApiSharedDataAccessModule } from '@nx-angular-nest/api/shared/data-access';
import { ApiSharedUtilsModule } from '@nx-angular-nest/api/shared/utils';

@Module({
  imports: [
    ApiSharedDataAccessModule,
    ApiSharedUtilsModule
  ],
  providers: [],
  exports: [],
})
export class ApiSharedFeatureModule {}
