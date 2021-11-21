import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserRequestModel } from '@nx-angular-nest/shared/utils-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AuthService } from '@nx-angular-nest/shared/data-access-auth';

@Component({
  selector: 'app-login-lib',
  templateUrl: './login-lib.component.html',
})
export class LoginLibComponent implements OnInit {
  error = null;
  wasErrored = false;
  loginForm: FormGroup = new FormGroup({});
  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onFormSubmitted(enteredValues: any) {
    if (this.loginForm.valid) {
      this.login(enteredValues);
    }
  }

  login(credentials: UserRequestModel) {
    this.authService.login(credentials).subscribe(
      async (res: any) => {
        if (res) {
          this.router.navigateByUrl('/tabs').then(() => {
            this.error = null;
          });
        }
      }, (errorResponse: any) => {
        this.wasErrored = true;
        this.dialog.open(ErrorDialogComponent, {data: errorResponse.error.message});
      },
    );
  }
}
