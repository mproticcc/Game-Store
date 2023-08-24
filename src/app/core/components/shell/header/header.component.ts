import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Link } from 'src/app/core/models/link-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription$: Subject<void> = new Subject<void>();

  links?: Link[] = [
    {
      id: 1,
      name: 'Home',
      path: 'games',
      rules: true,
    },
    {
      id: 2,
      name: 'Admin',
      path: 'admin',
      rules: false,
    },
    {
      id: 3,
      name: 'Login',
      path: 'login',
      rules: true,
    },
    {
      id: 4,
      name: 'Logout',
      path: '',
      rules: false,
    },
  ];

  userName?: String;

  constructor(private authService: AuthorizationService) {}

  ngOnInit(): void {
    this.getAllLink();
  }
  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  logoutUser(): void {
    this.authService.logOutUser();
    this.getAllLink();
  }

  private getAllLink(): void {
    this.authService
      .getAllLinks()
      .pipe(takeUntil(this.subscription$))
      .subscribe((links) => (this.links = links));
    this.userName = this.authService.getUserFirstName();
  }
}
