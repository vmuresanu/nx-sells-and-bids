import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '@nx-angular-nest/shared/data-access-auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'mobile-login-lib',
  templateUrl: './login-lib.component.html',
})
export class LoginLibComponent implements OnInit {
  error = null;
  loginForm: FormGroup = new FormGroup({});
  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
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

  private login(enteredValues: any) {
    this.authService.login(enteredValues).subscribe(
      async (res) => {
        if (res) {
          this.router.navigateByUrl('/tabs').then(() => {
            this.error = null;
            this.loginForm.reset();
            this.formDirective.resetForm();
          });
        }
      },
      async (errorResponse) => {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: `${errorResponse.error.message}`,
          buttons: ['OK'],
        });
        await alert.present();
      },
    );
  }
}
