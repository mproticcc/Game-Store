import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {
  constructor(private authService: AuthorizationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userId = this.authService.getUserId();

    request = request.clone({
      headers: request.headers.set('User_ID', userId + ''),
    });

    return next.handle(request);
  }
}
