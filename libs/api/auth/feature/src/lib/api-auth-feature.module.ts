import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ApiAuthDataAccessModule } from '@nx-angular-nest/api/auth/data-access';

@Module({
  imports: [ApiAuthDataAccessModule],
  controllers: [AuthController],
})
export class ApiAuthFeatureModule {}
