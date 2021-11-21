import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterLibComponent } from './register-lib.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiMaterialModule } from '@nx-angular-nest/shared/ui-material';
import { SharedDataAccessAuthModule } from '@nx-angular-nest/shared/data-access-auth';

@NgModule({
  declarations: [RegisterLibComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, SharedUiMaterialModule, SharedDataAccessAuthModule],
  exports: [RegisterLibComponent],
})
export class MobileFeatureRegisterModule {}
