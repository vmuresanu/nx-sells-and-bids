import { Controller, Get, Query } from '@nestjs/common';
import { PermissionsService } from '@nx-angular-nest/api/permissions/data-access';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {
  }

  @Get()
  getPermissionsByUsername(@Query('username') username: string) {
    return this.permissionsService.getPermissionsByUsername(username);
  }
}
