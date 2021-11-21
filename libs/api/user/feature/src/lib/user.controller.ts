import { Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '@nx-angular-nest/api/shared/utils';
import { UserRequest, UserService, UserUpdateRequest } from '@nx-angular-nest/api/user/data-access';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Get(':username')
  @UseGuards(JwtAuthGuard)
  getByUsername(@Param('username') username: string) {
    return this.usersService.getUserByUsernameWithRolesAndPermissions(username);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() userRequest: UserRequest) {
    return this.usersService.createUser(userRequest);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() userRequest: UserUpdateRequest) {
    return this.usersService.updateUser(id, userRequest);
  }
}
