import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { RegisterUser } from 'src/app/core/models/register-user.model';
import { User } from 'src/app/core/models/user.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthorizationService,
    private route: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    const user: RegisterUser = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };

    this.authService
      .login(user)
      .pipe(take(1))
      .subscribe((user: User[]) => {
        if (user.length) {
          this.authService.setUserData(user);

          const firstName = JSON.parse(
            sessionStorage.getItem('User')!
          ).firstName;

          this.notification.snackbarNotification(
            `Welcome ${firstName} !`,
            'Close',
            'center',
            'top',
            4000
          );
          // this.route.navigateByUrl('');
        } else {
          this.notification.snackbarNotification(
            'Wrong data',
            'Close',
            'center',
            'top',
            4000
          );
        }
      });
  }
}
