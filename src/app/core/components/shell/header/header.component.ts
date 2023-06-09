import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { take } from 'rxjs';
import { NavigationService } from './../../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/core/models/link-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links?: Link[];

  constructor(
    private navService: NavigationService,
    private authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.getAllLink();
  }

  logoutUser(): void {
    this.authService.logOutUser();
  }

  private getAllLink(): void {
    this.navService
      .getAll()
      .pipe(take(1))
      .subscribe((links) => (this.links = links));
  }
}
