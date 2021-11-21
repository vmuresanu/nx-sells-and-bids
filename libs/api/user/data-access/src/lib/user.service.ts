import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from './models/user.entity';
import { UserResponse } from './models/user.response';
import { UserExistsException, UserNotFoundException } from './exceptions/user.exceptions';
import { UserUpdateRequest } from './models/user-update.request';
import { UserRequest } from './models/user.request';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async getAll(): Promise<UserResponse[]> {
    return await this.userRepository.find()
      .then(user => plainToClass(UserResponse, user));
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async getUserByUsernameWithRolesAndPermissions(username: string): Promise<UserResponse> {
    return this.userRepository
      .findOne({
        where: { username },
        relations: ['roles']
      })
      .then(user => plainToClass(UserResponse, user));
  }

  async createUser(userRequest: UserRequest): Promise<UserResponse> {
    let user = await this.userRepository.findOne({
      where: { username: userRequest.username },
    });

    if (user) {
      throw new UserExistsException();
    }



    /*const userRoles = await this.roleRepository.find({ where: { name: 'USER' } });*/
    user = this.userRepository.create(userRequest);
    //user.roles = userRoles;

    return this.userRepository
      .save(user)
      .then((u: User) => {
        return plainToClass(UserResponse, u);
      });
  }

  async updateUser(userId: string, userRequest: UserUpdateRequest): Promise<UserResponse> {
    let user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles'],
    });

    if (!user) {
      throw new HttpException('User doesn\'t exist', HttpStatus.BAD_REQUEST);
    }

   /* if (userRequest.roles) {
      const newRoles = await this.roleRepository.find({ where: { name: In(userRequest.roles) } });
      user.roles = [...newRoles];
    }*/

    return this.userRepository
      .save({...userRequest, ...user})
      .then((u: User) => {
        return plainToClass(UserResponse, u);
      });
  }
}
