import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsRepository } from './permissions.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PermissionsRepository]),
  ],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class ApiPermissionsDataAccessModule {}
