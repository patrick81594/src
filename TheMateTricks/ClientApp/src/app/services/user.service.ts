import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../Models/UserDTO';

@Injectable()
export class UserService {

  baseUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  RetrieveUsers() {
    return this.http.get<Array<UserDTO>>(this.baseUrl + '/users');
  }
  RetrieveUser(id) {
  
    return this.http.get<UserDTO>(this.baseUrl + '/users/'+ id);
  }

  UpdateUser(id, updateUser) {
    return this.http.put(this.baseUrl+'/users/updateUser/' + id, updateUser);
  }
}
