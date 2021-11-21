import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiUserDataAccessModule } from '@nx-angular-nest/api/user/data-access';

@Module({
  imports: [
    ApiUserDataAccessModule
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class ApiAuthDataAccessModule {}
