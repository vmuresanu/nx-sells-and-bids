import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MobileFeatureLoginModule } from '@nx-angular-nest/mobile/feature-login';


@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, MobileFeatureLoginModule],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
