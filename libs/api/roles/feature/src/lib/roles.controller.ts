import { Controller, Get, Query } from '@nestjs/common';
import { RolesService } from '@nx-angular-nest/api/roles/data-access';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {
  }

  @Get()
  getRoles() {
    return this.rolesService.getRoles();
  }

  @Get()
  getRolesByUsername(@Query('username') username: string) {
    return this.rolesService.getRolesByUsername(username);
  }
}
