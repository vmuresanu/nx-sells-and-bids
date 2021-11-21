import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@nx-angular-nest/shared/data-access-auth';
import { AlertController, NavController } from '@ionic/angular';
import { UserRequestModel } from '@nx-angular-nest/shared/utils-interfaces';
import { RepeatPasswordValidator } from '../../../../shared/utils-validators/src/lib/repeat-password.validator';

@Component({
  selector: 'mobile-register-lib',
  templateUrl: './register-lib.component.html',
})
export class RegisterLibComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly navController: NavController,
    private readonly alertController: AlertController,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
      confirmPassword: [undefined, [Validators.required, RepeatPasswordValidator]],
    });
  }

  createUser(formValue: any) {
    const credentials: UserRequestModel = {
      username: formValue.username,
      password: formValue.password,
    };
    this.authService.registerUser(credentials).subscribe(
      () => {
        this.navController.back();
      },
      (error) => {
        this.openAlert(error?.error?.message);
      },
    );
  }

  async openAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
