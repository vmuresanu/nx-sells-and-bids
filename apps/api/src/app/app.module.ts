import { Module } from '@nestjs/common';
import { ApiCoreConfigModule } from '@nx-angular-nest/api/core/config';

@Module({
  imports: [
    ApiCoreConfigModule,
  ],
})
export class AppModule {}
