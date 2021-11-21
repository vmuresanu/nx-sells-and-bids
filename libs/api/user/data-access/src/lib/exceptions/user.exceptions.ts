import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User with such username doesn\'t exist', HttpStatus.NOT_FOUND);
  }
}

export class InvalidUserException extends HttpException {
  constructor() {
    super('Invalid username/password', HttpStatus.BAD_REQUEST);
  }
}

export class UserExistsException extends HttpException {
  constructor() {
    super('Username already exists', HttpStatus.BAD_REQUEST);
  }
}
