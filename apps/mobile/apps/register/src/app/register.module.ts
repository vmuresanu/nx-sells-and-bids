import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';
import { MobileFeatureRegisterModule } from '@nx-angular-nest/mobile/feature-register';

@NgModule({
  declarations: [RegisterComponent],
  entryComponents: [],
  imports: [CommonModule, IonicModule.forRoot(), RegisterRoutingModule, MobileFeatureRegisterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [RegisterComponent],
})
export class RegisterModule {}
