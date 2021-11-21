import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginLibComponent } from './login-lib.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SharedUiMaterialModule } from '@nx-angular-nest/shared/ui-material';
import { RouterModule } from '@angular/router';
import { SharedDataAccessAuthModule } from '@nx-angular-nest/shared/data-access-auth';

@NgModule({
  declarations: [LoginLibComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiMaterialModule,
    SharedDataAccessAuthModule,
    RouterModule
  ],
  exports: [LoginLibComponent, ErrorDialogComponent]
})
export class WebFeatureLoginModule {}
