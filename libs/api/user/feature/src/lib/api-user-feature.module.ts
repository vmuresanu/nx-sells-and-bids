import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ApiUserDataAccessModule } from '@nx-angular-nest/api/user/data-access';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../../../data-access/src/lib/user.repository';

@Module({
  imports: [
    ApiUserDataAccessModule
  ],
  controllers: [UserController],
})
export class ApiUserFeatureModule {}
