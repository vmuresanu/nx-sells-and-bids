import { Body, Controller, Post } from '@nestjs/common';
import { UserRequest } from '@nx-angular-nest/api/user/data-access';
import { AuthService } from '@nx-angular-nest/api/auth/data-access';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userRequest: UserRequest) {
    return this.authService.login(userRequest);
  }

  @Post('register')
  async register(@Body() userRequest: UserRequest) {
    return this.authService.register(userRequest);
  }
}
