import { NgModule } from '@angular/core';
import { WebFeatureLoginModule } from '@nx-angular-nest/web/feature-login';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [WebFeatureLoginModule, LoginRoutingModule],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
