import { Injectable } from '@nestjs/common';
import { UserRequest, UserResponse, UserService } from '@nx-angular-nest/api/user/data-access';
import { comparePassword, generateToken, mapRolesAndPermissions } from '@nx-angular-nest/api/auth/utils';
import { InvalidUserException } from '../../../../user/data-access/src/lib/exceptions/user.exceptions';


@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService
  ) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (user && await comparePassword(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userRequest: UserRequest) {
    const { username, password } = userRequest;
    const userEntity = await this.userService.getUserByUsername(username);
    const userWithRolesAndPermissions = await this.userService.getUserByUsernameWithRolesAndPermissions(username);
    if (!userEntity || !(await comparePassword(password, userEntity.password))) {
      throw new InvalidUserException();
    } else {
      const mappedUserWithRolesAndPermissions = mapRolesAndPermissions(userWithRolesAndPermissions);
      const token = generateToken(
        userEntity.id,
        userEntity.username,
        mappedUserWithRolesAndPermissions.roles,
        mappedUserWithRolesAndPermissions.permissions
      );
      return { token };
    }
  }

  async register(userDto: UserRequest): Promise<UserResponse> {

    return await this.userService.createUser(userDto);
  }
}
