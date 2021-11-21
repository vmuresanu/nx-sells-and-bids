import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLibComponent } from './login-lib.component';
import { IonicModule } from '@ionic/angular';
import { SharedUiMaterialModule } from '@nx-angular-nest/shared/ui-material';
import { SharedDataAccessAuthModule } from '@nx-angular-nest/shared/data-access-auth';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginLibComponent],
  imports: [CommonModule, IonicModule, SharedUiMaterialModule, SharedDataAccessAuthModule, ReactiveFormsModule, RouterModule],
  exports: [LoginLibComponent],
})
export class MobileFeatureLoginModule {}
