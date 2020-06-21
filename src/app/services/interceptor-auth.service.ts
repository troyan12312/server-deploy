import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable()
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    const username = this.authenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }

}
