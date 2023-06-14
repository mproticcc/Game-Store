import { take } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/core/models/role.model';
import { User } from 'src/app/core/models/user.model';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { REGEX } from 'src/app/shared/consts/regex.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  arePasswordsEqual?: boolean = false;

  registrationForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.firstUpperAllLethes),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.firstUpperAllLethes),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.everythingExceptSpace),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    {
      validators: this.isPasswordMatched.bind(this),
    }
  );

  constructor(
    private authorization: AuthorizationService,
    private notification: NotificationService
  ) {}

  onRegister(): void {
    const date = new Date();

    const user: User = {
      id: Math.round(Math.random() * date.getSeconds()),
      firstName: this.registrationForm.value.firstName!,
      lastName: this.registrationForm.value.lastName!,
      email: this.registrationForm.value.email!,
      password: this.registrationForm.value.password!,
      role: Role.User,
      createdAt: new Date().toISOString(),
    };

    this.authorization
      .register(user)
      .pipe(take(1))
      .subscribe(() =>
        this.notification.snackbarNotification(
          'Successfully registered',
          'Ok',
          'center',
          'top',
          3000
        )
      );
  }

  private isPasswordMatched(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password')!;
    const { value: confirmPassword } = formGroup.get('confirmPassword')!;
    if (password !== confirmPassword) {
      this.arePasswordsEqual = true;
    } else {
      this.arePasswordsEqual = false;
    }
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
