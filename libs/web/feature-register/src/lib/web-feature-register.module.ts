import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterLibComponent } from './register-lib.component';
import { SharedUiMaterialModule } from '@nx-angular-nest/shared/ui-material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterLibComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedUiMaterialModule],
  exports: [RegisterLibComponent]
})
export class WebFeatureRegisterModule {}
