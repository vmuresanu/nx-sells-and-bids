import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { ApiAuthDataAccessModule } from '@nx-angular-nest/api/auth/data-access';

@Module({
  controllers: [],
  providers: [LocalStrategy, JwtStrategy],
  imports: [
    ApiAuthDataAccessModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '3260s' },
    }),
  ],
})
export class ApiSharedUtilsModule {}
