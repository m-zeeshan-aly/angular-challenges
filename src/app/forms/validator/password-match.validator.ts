import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password1')?.value;
  const confirmPassword = control.get('password2')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
};
