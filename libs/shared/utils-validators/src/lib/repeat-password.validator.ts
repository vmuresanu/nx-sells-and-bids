import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function RepeatPasswordValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const isEqual = control.value === control.parent?.get('password')?.value;
  return isEqual ?  null : { passwordMismatch: true };
}
