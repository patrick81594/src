import { Injectable } from '@angular/core';
import { AuthUser } from '../Models/authuser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable()

export class AuthService {

    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

  login(user) {
    return this.http.post<AuthUser>(/*.baseUrl +*/ 'http://localhost:57629/api/auth/login', user)
      .map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem('user', JSON.stringify(result.user));
          console.log('token');
        }
        return result;
      });

  }
  Register(model) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<AuthUser>(/*.baseUrl +*/ 'http://localhost:57629/api/auth/register', model, { headers: contentHeader });
    }

    isExpired() {
        return this.jwtHelperService.isTokenExpired();
    }

    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log("Logout Successful");

    }
}
