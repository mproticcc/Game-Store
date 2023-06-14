import { take } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { RegisterUser } from 'src/app/core/models/register-user.model';
import { User } from 'src/app/core/models/user.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { REGEX } from 'src/app/shared/consts/regex.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.everythingExceptSpace),
    ]),
  });

  constructor(
    private authService: AuthorizationService,
    private route: Router,
    private notification: NotificationService
  ) {}

  loginUser(): void {
    const user: RegisterUser = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };

    this.authService
      .login(user)
      .pipe(take(1))
      .subscribe((user: User[]) => {
        if (user?.length) {
          this.authService.setUserData(user);

          const firstName = this.authService.getUserFirstName();

          this.notification.snackbarNotification(
            `Welcome ${firstName} !`,
            'Close',
            'center',
            'top',
            4000
          );
          this.route.navigateByUrl('/admin');
        } else {
          this.notification.snackbarNotification(
            'Your email or password are incorrect.',
            'Close',
            'center',
            'top',
            4000
          );
        }
      });
  }
}
