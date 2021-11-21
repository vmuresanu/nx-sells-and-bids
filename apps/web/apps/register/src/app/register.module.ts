import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { WebFeatureRegisterModule } from '@nx-angular-nest/web/feature-register';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [WebFeatureRegisterModule, RegisterRoutingModule],
  declarations: [RegisterComponent],
  bootstrap: [RegisterComponent],
})
export class RegisterModule {}
