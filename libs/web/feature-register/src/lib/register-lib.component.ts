import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '@nx-angular-nest/shared/data-access-auth';
import { UserRequestModel } from '@nx-angular-nest/shared/utils-interfaces';
import { RepeatPasswordValidator } from '../../../../shared/utils-validators/src/lib/repeat-password.validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-lib',
  templateUrl: './register-lib.component.html',
})
export class RegisterLibComponent implements OnInit {
  error = null;
  registerForm: FormGroup = new FormGroup({});
  passwordControl!: FormControl
  repeatPasswordControl!: FormControl;
  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', { validators: [Validators.required, RepeatPasswordValidator] }],
      repeatPassword: ['', { validators: [Validators.required, RepeatPasswordValidator] }],
    });

    this.passwordControl = this.registerForm.get('password') as FormControl;
    this.repeatPasswordControl = this.registerForm.get('repeatPassword') as FormControl;

    /*this.passwordControl.valueChanges.subscribe((value) => {
      if (value) {
      }
      this.repeatPasswordControl.setValue(null);
    })*/
  }

  onPasswordBlur() {
    this.repeatPasswordControl.setValue(null);
  }

  onFormSubmitted(enteredValues: any) {
    if (this.registerForm.valid) {
      this.register(enteredValues);
    }
  }

  private register(credentials: UserRequestModel) {
    this.authService.registerUser(credentials).subscribe(
      async (res: any) => {
        if (res) {
          this.snackBar.open('User has been successfully registered. Please login.', '', {duration: 3000})
            .afterOpened()
            .subscribe(() => {
              this.router.navigateByUrl('/login')
            })
        }
      }
    );
  }
}
