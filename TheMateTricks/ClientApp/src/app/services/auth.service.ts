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
    constructor(public http: HttpClient, public jwtHelperService: JwtHelperService) { }

  login(user) {
    return this.http.post<AuthUser>(this.baseUrl + '/auth/login', user)
      .map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem("user", JSON.stringify(result));
          window.location.reload();
          console.log(localStorage.getItem("token"));
          console.log(localStorage.getItem("user"));
        }
        return result;
      });

  }
  Register(model) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<AuthUser>(this.baseUrl + '/auth/register', model, { headers: contentHeader });
    }

    isExpired() {
        return this.jwtHelperService.isTokenExpired();
    }

    logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Logout Successful");

    }
}
