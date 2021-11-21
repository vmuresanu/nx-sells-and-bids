import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { typeOrmConfig } from './typeorm.config';
import { ApiAuthFeatureModule } from '@nx-angular-nest/api/auth/feature';
import { HttpErrorFilter, LoggingInterceptor } from '@nx-angular-nest/api/shared/data-access';
import { ApiUserFeatureModule } from '@nx-angular-nest/api/user/feature';
import { getMetadataArgsStorage } from 'typeorm';
import { ApiSharedFeatureModule } from '@nx-angular-nest/api/shared/feature';
import { ApiRolesFeatureModule } from '@nx-angular-nest/api/roles/feature';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
    }),
    ApiAuthFeatureModule,
    ApiUserFeatureModule,
    ApiSharedFeatureModule,
    ApiRolesFeatureModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class ApiCoreConfigModule {}
