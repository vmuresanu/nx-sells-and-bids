import { SetMetadata } from '@nestjs/common';

export const HasPermission = (...permissions: string[]) => SetMetadata('hasPermission', permissions);
export const HasRole = (...roles: string[]) => SetMetadata('hasRole', roles);
